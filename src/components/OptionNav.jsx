import ItemNav from "./ItemNav";
import "../index.css";

export default function OptionNav({ opt, enabled }) {
  return (
    <ul
      className={`opt-nav ml-4 ${
        enabled
          ? "opt-nav-block absolute top-12 left-8 border rounded-lg bg-white"
          : "hidden"
      }`}
    >
      {opt.map((option) => (
        <ItemNav text={option} />
      ))}
      {/*
          Diagrama de landing page

            - nav
            - Video
            - subscribe
            - about
            - novedades
            - mobile app
            -footer

            extra: (react-router)
              - Productos
              - Acordes
              - Canciones
              - Afinador
      */}
    </ul>
  );
}
