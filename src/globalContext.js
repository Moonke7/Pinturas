import React, { createContext, useState, useContext } from 'react';
import { json } from './json';

const PinturaContext = createContext();

export const usePintura = () => useContext(PinturaContext);

export const PinturaProvider = ({ children }) => {
  const [clickeado, setClickeado] = useState(json[0]);
  const [indiceMostrar, setIncide] = useState("");

  const [BigPic, setPintura] = useState("");
  const [Esconder, setEsconder] = useState(true);
  
  const handleClick = (title, indice) => {
    setClickeado(title);
    setIncide(indice);
  };
  const Next = () =>{
    json.map((pintura, index) =>{
      if(index > indiceMostrar && index < indiceMostrar + 2){
        setClickeado(pintura);
        setIncide(index);
      }
      return null;
    })
  }
  const Bfore = () =>{
    json.map((pintura, index) =>{
      if(index < indiceMostrar && index > indiceMostrar + -2){
        setClickeado(pintura);
        setIncide(index);
      }
      return null
    })
  }
  const ClickPic = (indice) =>{
    setPintura(indice);
    setEsconder(false);
  }
  const cEsconder = () =>{
    setEsconder(true);
  }

  return (
    <PinturaContext.Provider value={{ clickeado, handleClick, Next, Bfore, BigPic, ClickPic, Esconder, cEsconder}}>
      {children}
    </PinturaContext.Provider>
  );
};
