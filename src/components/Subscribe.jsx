import Btn from "./Btn";

export default function Subscribe({ title, description, image }) {
  return (
    <div
      id="subscribe"
      className="bg-gray-300 w-full p-8 flex justify-center items-center"
    >
      <img src={image} alt="" width="210" />
      <div className="flex items-center justify-center flex-col ml-16">
        <h2 className="pb-4 text-center">
          <b className="text-3xl ">{title}</b>
        </h2>
        <p className="max-w-96 text-center pb-2">{description}</p>
        <input
          className="w-full p-1 pt-2 pb-2 rounded-md mb-2"
          type="text"
          placeholder="Ingrese su correo"
        />
        <Btn text="Suscríbete" type="primary" width="w-full" />
      </div>
    </div>
  );
}
