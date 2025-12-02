import { FiCamera } from 'react-icons/fi';

export default function RecapPhotoGallery() {
  return (
    <section className="px-4 pt-4 pb-8">
      <a
        href="https://gallery.warwickdrama.org.uk/index.php?/category/90"
        target="_blank"
        className="block mx-auto overflow-hidden p-2 border border-slate-300 rounded-md hover:scale-105 w-full md:max-w-xl transition duration-100 ease-in-out"
      >
        <FiCamera className="mx-auto text-4xl" />
        <h2 className="text-teal text-2xl font-semibold mb-1">Photo Gallery</h2>
        <p>View the WSAF 2025 photo gallery here</p>
      </a>
    </section>
  );
}
