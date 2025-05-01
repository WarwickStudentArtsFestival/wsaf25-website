const rateLimitMap = new Map(); // Keyed by IP

// Allow 1 request per IP every 60 seconds
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

export async function POST(req) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';

    const now = Date.now();
    const lastRequestTime = rateLimitMap.get(ip) || 0;
    if (now - lastRequestTime < RATE_LIMIT_WINDOW_MS) {
      const retryAfter = Math.ceil(
        (RATE_LIMIT_WINDOW_MS - (now - lastRequestTime)) / 1000,
      ); // in seconds
      return new Response(
        JSON.stringify({
          error: 'Not so fast silly goose!\nWait ' + retryAfter + 's',
        }),
        { status: 429 },
      );
    }

    rateLimitMap.set(ip, now);

    const formData = await req.formData();

    const caption = formData.get('caption') || 'Untitled';
    const author = formData.get('author') || 'Unknown';
    const file = formData.get('file');

    if (!file || typeof file !== 'object') {
      console.error('Invalid file received:', file);
      return new Response(JSON.stringify({ error: 'Invalid file received.' }), {
        status: 400,
      });
    }

    const webhookUrl = process.env.NEXT_PRIVATE_DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('Webhook URL not set.');
      return new Response(JSON.stringify({ error: 'Webhook URL not set.' }), {
        status: 500,
      });
    }

    const discordForm = new FormData();
    discordForm.append('file', file, 'canvas.png');
    discordForm.append(
      'payload_json',
      JSON.stringify({
        content: `# *["${caption}"](https://wsaf.org.uk/wpaint)*\n_by ${author}_`,
      }),
    );

    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: discordForm,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to send to Discord:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to send to Discord' }),
        { status: 500 },
      );
    }

    return new Response(
      JSON.stringify({ message: 'Image sent successfully!' }),
      { status: 200 },
    );
  } catch (err) {
    console.error('Error in /api/sendToDiscord:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
