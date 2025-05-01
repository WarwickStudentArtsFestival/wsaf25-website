import { prepareCanvasImage } from './prepareCanvas';

export const saveImage = async (caption: string, author: string) => {
  const formData = await prepareCanvasImage(caption, author);
  if (!formData) return;

  const file = formData.get('file') as File;
  if (!file) return;

  const blobUrl = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = 'my-artwork.png';
  link.click();
  URL.revokeObjectURL(blobUrl);
};
