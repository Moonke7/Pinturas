import React from "react";
import Fotos from "./Fotos";
import "../styles/page.css";
import Description from "./Description";
import { Link } from "react-router-dom";
import { usePintura } from "../../../globalContext";

function InformacionPintura({ titulo, description, pintura }) {
  const { Next, Bfore } = usePintura();
  return (
    <div className="container_I">
      <div className="title">
        <h2>{titulo}</h2>
      </div>
      <div className="info">
        <div className="bfore-next">
          <Link to="/obras/" onClick={Bfore}>
            {" "}
            Anterior{" "}
          </Link>{" "}
          /{" "}
          <Link onClick={Next} to="/obras/">
            {" "}
            Siguiente{" "}
          </Link>
        </div>
        <div className="pic-info">
          <h4>
            <Link to="/">Abril Carreño</Link> / {pintura.year} / Bio
          </h4>
        </div>
      </div>
      {description && (
        <div style={{ width: "70%" }}>
          <Description description={description} />
        </div>
      )}
      {pintura.name.includes("Humano-Tierra") ? (
        <>
          <div
            style={{ position: "relative", width: "70%" }}
            className="vimeo-container"
          >
            <iframe
              src="https://player.vimeo.com/video/1104968498?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="fullscreen;"
              frameBorder={0}
              style={{
                width: "640px",
                height: "360px",
              }}
              title="#AcariciarLaTierra"
              className="vimeo"
            ></iframe>
            <Description
              description={`
                  Primera acción de Proyecto Humano-Tierra (2021) #AcariciarLaTierra (2021)
                  Creado en el contexto de la pandemia Covid, como obra de arte colaborativa con videos caseros enviados a través de instagram.
                  Se pedía a los participantes enviar un video "acariciando la Tierra como si fuera el ser que más quieren".
    
                  By Abril carreño
    
                  Todos los derechos reservados ©`}
            />
          </div>
          <div
            style={{ position: "relative", width: "70%" }}
            className="vimeo-container"
          >
            <iframe
              src="https://player.vimeo.com/video/1104965543?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="fullscreen;"
              style={{
                width: "612px",
                height: "460px",
              }}
              frameBorder={0}
              title="#PurificarLaTierra"
              className="vimeo"
            ></iframe>
            <Description
              description={`
              Segunda acción de Proyecto Humano-Tierra (2021) #PurificarLaTierra.(2023)

              Creado en el marco de la iniciativa #PurificarLaTierra: Limpieza y Reforestación ganador de Territorio + Acción de VEXCOM UCH.

              By Abril Carreño Carvajal
              Colaborate with Ignacio Diaz

              Todos los derechos reservados ©`}
            />
          </div>
        </>
      ) : (
        <img id="mainPic" src={pintura.picture[0]} alt="foto_principal" />
      )}
      <div className="desc-morePics">
        <Fotos pintura={pintura} />
        {/* <Description description={description}/> */}
      </div>
    </div>
  );
}

export default InformacionPintura;
