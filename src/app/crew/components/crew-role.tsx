export default function CrewRole({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <article className="bg-secondary p-4 sm:w-72">
      <h3 className="uppercase font-bold text-2xl">{name}</h3>
      <p className="text-sm">{description}</p>
    </article>
  );
}
