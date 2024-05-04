import React from "react";
import "../styles/fotos.css";
import { usePintura } from "../../../globalContext";

function Fotos({ pintura }) {

  const {ClickPic} = usePintura();
  return (
    <div className="fotos">
      <ul>
        {pintura.picture.slice(1).map((photo, index) => (
          <li key={index} > <img style={{cursor: "pointer"}} onClick={() => ClickPic(photo)} src={photo} alt={`foto ${index + 2}`}/> </li>
        ))}
      </ul>
    </div>
  );
}

export default Fotos;
