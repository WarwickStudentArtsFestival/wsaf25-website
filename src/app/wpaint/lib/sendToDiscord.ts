import toast from 'react-hot-toast';
import Paintbrush from '@/assets/icons/paintbrush.png';

export const sendToDiscord = async (
  caption: string,
  author: string,
): Promise<void> => {
  const canvas = document.querySelector('canvas') as HTMLCanvasElement;
  if (!canvas) {
    toast.error('Canvas not found');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    toast.error('Canvas context not available');
    return;
  }

  const paintbrushImg = new window.Image();
  paintbrushImg.src = Paintbrush.src;

  paintbrushImg.onload = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const sendCanvas = document.createElement('canvas');
    const sendCtx = sendCanvas.getContext('2d');
    if (!sendCtx)
      return toast.error('Unable to create canvas for sending to Discord');

    sendCanvas.width = canvas.width;
    sendCanvas.height = canvas.height;

    sendCtx.putImageData(imageData, 0, 0);

    const brushX = sendCanvas.width - 110;
    const brushY = sendCanvas.height - 105;
    const scale = 1.2;

    sendCtx.save();
    sendCtx.translate(brushX, brushY);
    sendCtx.rotate((120 * Math.PI) / 180);
    sendCtx.scale(scale, scale);
    sendCtx.drawImage(
      paintbrushImg,
      -paintbrushImg.width / 2,
      -paintbrushImg.height / 2,
    );
    sendCtx.restore();

    sendCanvas.toBlob(async (blob) => {
      if (!blob) return toast.error('Failed to get image blob');

      const formData = new FormData();
      formData.append('file', blob, 'canvas.png');
      formData.append('caption', caption || 'Untitled');
      formData.append('author', author || 'Unknown');

      const sendingToast = toast.loading('Sending to Discord...');
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
          toast.success('Image sent to Discord!', { id: sendingToast });
        }
      } catch (err) {
        toast.error('Error sending image', { id: sendingToast });
        console.error(err);
      }
    }, 'image/png');
  };
};
