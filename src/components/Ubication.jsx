export default function Ubication() {
  return (
    <div id="Ubication">
      <h2 className="text-center text-3xl pb-8 flex flex-col items-center justify-center">
        Ubicación
      </h2>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15799.455766236764!2d-79.05708211284177!3d-8.115333099999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d9fb3467261%3A0x752547ad9a204df6!2sUniversidad%20Nacional%20de%20Trujillo!5e0!3m2!1ses!2spe!4v1683297975462!5m2!1ses!2spe"
          width="600"
          height="450"
          style={{ border: "0", width: "100%", height: "80vh" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
