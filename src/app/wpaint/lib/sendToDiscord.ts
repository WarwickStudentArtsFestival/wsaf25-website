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
    // API endpoint removed - no backend available
    toast.error('Discord submission unavailable', {
      id: sendingToast,
    });
  } catch (err) {
    toast.error('Error sending image', { id: sendingToast });
    console.error(err);
  }
};
