export default function About({ title, description, image }) {
  return (
    <div className="flex">
      <section className="w-2/4">
        {description.map((p) => (
          <p className="mb-2 text-md m-8">{p}</p>
        ))}
      </section>
      <img className="w-2/4" src={image} alt="guitar" />
    </div>
  );
}
