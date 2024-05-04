import React from "react";
import { useState } from "react";
import { json } from "../json";
import { Link } from "react-router-dom";
import "../styles/Pinturas.css"
import { usePintura } from "../globalContext";

function Pinturas() {
  const {handleClick} = usePintura();
  const [mouseOverIndex, setMouseOverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setMouseOverIndex(index);
  };

  const handleMouseLeave = () => {
    setMouseOverIndex(null);
  };

  return (
    <section className="pinturas__container">
      {json.map((pintura, index) => (
        <div key={pintura.name} className="pintura_container" id={pintura.name} 
        onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}
        >
          <Link to="/Obras" onClick={() => handleClick(pintura, index)}> <img style={{cursor: "pointer"}} src={pintura.picture[0]} alt="pic"></img> </Link>
          <div className="detalles">
            <h2 className={mouseOverIndex === index ? "texto__clicked_tit": "texto_tit"}>{pintura.name} ({pintura.year})</h2>
            <h3 className={mouseOverIndex === index ? "texto__clicked": "texto"}>{pintura.description}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}
;


export default Pinturas;
