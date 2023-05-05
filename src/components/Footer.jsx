import ItemSocial from "./ItemRed";

export default function Footer({ social }) {
  return (
    <>
      <footer
        className="bg-black text-white flex flex-col items-center p-12"
        style={{ borderBottom: "1px solid gray" }}
      >
        <section
          className="footer-false text-center flex justify-between flex-wrap"
          style={{ width: "800px" }}
        >
          <section className="text-center">
            <p className="text-xl">
              Guitar
              <span className="text-xl" style={{ color: "orange" }}>
                Hub
              </span>
            </p>
            <span>Av. España #151, Trujillo</span>
          </section>
          <section>
            <ul>
              <li>
                <a href="">Acordes</a>
              </li>
              <li>
                <a href="">Canciones</a>
              </li>
              <li>
                <a href="">Afinador</a>
              </li>
            </ul>
          </section>
          <section>
            <ul>
              <li>
                <a href="">Política de privacidad</a>
              </li>
              <li>
                <a href="">Detalles de envío</a>
              </li>
              <li>
                <a href="">Promociones</a>
              </li>
              <li>
                <a href="">Términos y condiciones</a>
              </li>
            </ul>
          </section>
        </section>
      </footer>
      <section className="social-container bg-black text-white flex flex-wrap w-full justify-between p-2 pl-8 pr-8">
        <span>Copyright © 2023 | GuitarHub</span>
        <section className="flex">
          <ItemSocial image={social[0]} />
          <ItemSocial image={social[1]} />
          <ItemSocial image={social[2]} />
          <ItemSocial image={social[3]} />
        </section>
      </section>
    </>
  );
}
