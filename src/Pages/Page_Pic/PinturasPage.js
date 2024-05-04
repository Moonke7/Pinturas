import React from "react";
import { MainLayout } from "../../MainLayout";
import { usePintura } from "../../globalContext";
import InformacionPintura from "./components/InformacionPintura";
import Footer from "../../Components/Footer";
import "./styles/page.css"
import BigPics from "./components/BigPics";


function Pinturas_page() {
  const { clickeado, BigPic, Esconder } = usePintura();

  return (
    <MainLayout >
      <section className="container">
        <div className="bigPic">
          <div className={Esconder ? "fondo_no": "fondo"}></div>
          <BigPics source={BigPic}/>
        </div>  
        <InformacionPintura titulo={clickeado.name} description={clickeado.description} pintura={clickeado}/>
        <Footer/>
      </section>
    </MainLayout>
  );
}

export default Pinturas_page;
