import { prepareCanvasImage } from './prepareCanvas';
import toast from 'react-hot-toast';

export const sendToDiscord = async (
  caption: string,
  author: string,
): Promise<void> => {
  const formData = await prepareCanvasImage(caption, author);
  if (!formData) return;

  const sendingToast = toast.loading('Sending to WSAF...');
  try {
    const response = await fetch('/api/sendToDiscord', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    if (!response.ok) {
      toast.error(result.error || 'Failed to send image', {
        id: sendingToast,
      });
    } else {
      toast.success('Image sent to WSAF!', { id: sendingToast });
    }
  } catch (err) {
    toast.error('Error sending image', { id: sendingToast });
    console.error(err);
  }
};
