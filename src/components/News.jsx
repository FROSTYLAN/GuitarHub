export default function News({ newsArr }) {
  return (
    <div id="news" className="pl-8 pr-8 pb-16">
      <h3 className="text-center text-3xl mt-16 mb-4">Novedades</h3>
      <div className="flex flex-wrap justify-center">
        {newsArr.map((n) => (
          <img className="cursor-pointer" width="430px" src={n} alt={n} />
        ))}
      </div>
    </div>
  );
}
