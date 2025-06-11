import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const dir = path.join(process.cwd(), 'public/wpaint-gallery');
  const files = fs.readdirSync(dir).filter((file) => file.endsWith('.jpg'));

  if (files.length === 0) {
    return NextResponse.json({ error: 'No images found' }, { status: 404 });
  }

  const randomIndex = Math.floor(Math.random() * files.length);
  const randomFile = files[randomIndex];
  const filePath = path.join(dir, randomFile);

  const fileBuffer = fs.readFileSync(filePath);

  const uint8Array = new Uint8Array(fileBuffer);

  return new NextResponse(uint8Array, {
    status: 200,
    headers: {
      'Content-Type': 'image/jpeg',
      'Content-Disposition': `inline; filename="${randomFile}"`,
    },
  });
}
