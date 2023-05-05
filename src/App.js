import About from "./components/About";
import Footer from "./components/Footer";
import { Nav } from "./components/Nav";
import VideoContainer from "./components/VideoContainer";
import "./index.css";
import about from "./doc/about.json";
import aboutImg from "./assets/about-img.jpg";
import News from "./components/News";
import Subscribe from "./components/Subscribe";
import Mobile from "./components/Mobile";
import introVideo from "./assets/intro-bg.mp4";
import logo from "./assets/logo.png";
import new1 from "./assets/new1.png";
import new2 from "./assets/new2.png";
import new3 from "./assets/new3.png";
import new4 from "./assets/new4.png";
import new5 from "./assets/new5.png";
import new6 from "./assets/new6.png";
import new7 from "./assets/new7.png";
import social1 from "./assets/social1.svg";
import social2 from "./assets/social2.svg";
import social3 from "./assets/social3.svg";
import social4 from "./assets/social4.svg";
import Ubication from "./components/Ubication";

export default function App() {
  const newsArr = [new1, new2, new3, new4, new5, new6, new7];
  const socialsArr = [social1, social2, social3, social4];
  return (
    <div className="App">
      <Nav
        options={[
          "Productos",
          "Acordes",
          "Canciones",
          "Afinador",
          "Contáctanos",
          "Ayuda",
        ]}
        logo={logo}
      />
      <VideoContainer video={introVideo} />
      <About title="Sobre nosotros" description={about} image={aboutImg} />
      <Subscribe
        title="Todo lo que buscabas está acá!"
        description="No esperes más, formá parte de nosotros ahora mismo y accede a contenido exclusivo."
        image={logo}
      />
      <News newsArr={newsArr} />
      <Ubication />
      {/* <Mobile /> */}
      <Footer social={socialsArr} />
    </div>
  );
}
