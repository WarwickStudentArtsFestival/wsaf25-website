import toast from 'react-hot-toast';
import Paintbrush from '@/assets/icons/paintbrush.png';

export const prepareCanvasImage = async (
  caption: string,
  author: string,
): Promise<FormData | null> => {
  const canvas = document.querySelector('canvas') as HTMLCanvasElement;
  if (!canvas) {
    toast.error('Canvas not found');
    return null;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    toast.error('Canvas context not available');
    return null;
  }

  const paintbrushImg = new window.Image();
  paintbrushImg.src = Paintbrush.src;

  return new Promise((resolve) => {
    paintbrushImg.onload = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      const sendCanvas = document.createElement('canvas');
      const sendCtx = sendCanvas.getContext('2d');
      if (!sendCtx) {
        toast.error('Unable to create canvas for sending to Discord');
        return resolve(null);
      }

      sendCanvas.width = canvas.width;
      sendCanvas.height = canvas.height;

      sendCtx.putImageData(imageData, 0, 0);

      const scale = Math.min(canvas.width, canvas.height) / paintbrushImg.width;
      const brushX = sendCanvas.width - paintbrushImg.width * 0.1 * scale - 10;
      const brushY =
        sendCanvas.height - paintbrushImg.height * 0.1 * scale - 10;

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

      sendCanvas.toBlob((blob) => {
        if (!blob) {
          toast.error('Failed to get image blob');
          return resolve(null);
        }

        const formData = new FormData();
        formData.append('file', blob, 'canvas.png');
        formData.append('caption', caption || 'Untitled');
        formData.append('author', author || 'Unknown');

        resolve(formData);
      }, 'image/png');
    };

    paintbrushImg.onerror = () => {
      toast.error('Failed to load paintbrush icon');
      resolve(null);
    };
  });
};
