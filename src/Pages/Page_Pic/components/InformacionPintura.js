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
            {" "}
            <Link to="/"> Abril Carreño </Link> / {pintura.year} / Bio
          </h4>
        </div>
      </div>
      <img id="mainPic" src={pintura.picture[0]} alt="foto_principal"></img>
      <div className="desc-morePics">
        <Fotos pintura={pintura} />
        {/* <Description description={description}/> */}
      </div>
    </div>
  );
}

export default InformacionPintura;
