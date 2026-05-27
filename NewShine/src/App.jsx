import WaterDrops from "./components/WaterDrops";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Precos from "./components/Precos";
import AntesDepois from "./components/AntesDepois";
import Depoimentos from "./components/Depoimentos";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-wrapper">
      <WaterDrops />
      <Navbar />
      <Hero />
      <Servicos />
      <Precos />
      <AntesDepois />
      <Depoimentos />
      <CTAFinal />
      <Footer />
    </div>
  );
}