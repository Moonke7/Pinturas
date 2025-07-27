import React from "react";
import { MainLayout } from "../../MainLayout";
import Footer from "../../Components/Footer";
import "./style/bio.css";
import cv from "../../data/CV.docx"
import foto from "../../pics/Screenshot_20241016_235344_Instagram.jpg"

function PageBio() {
  return (
    <MainLayout>
      <article>
        <h2>BIO</h2>
        <div className="profile_pic">
          <img
            src={foto}
            alt="profile_pic"
            style={{width: "60%"}}
          />
        </div>
        <div className="description">
        <b>Abril Carreño Carvajal (1999)</b> es artista visual y pintora, Licenciada en Artes de la Universidad De Chile. Actualmente trabaja para el programa PACE (U. de Chile) como mediadora cultural. Dicta clases de pintura y ha trabajado como tallerista enseñando dibujo, pintura y muralismo en colegios de alta vulnerabilidad. Su trabajo de creación e investigación artística se basa en el uso del archivo, la fotografía, la performance y el collage digital para tratar temas vinculados al extractivismo, la ecología, las practicas colaborativas y el feminismo. Es autora del “Proyecto Humano-Tierra” premiado el 2023 en el concurso de VEXCOM “Territorio + Acción: concurso de iniciativas estudiantiles de vinculación con el medio“ y curadora de la muestra De Acciones Colaborativas 2021-2023. Además, ha sido invitada como representante de la misma universidad en el “Encuentro de proyectos de vinculación con el medio” en la Universidad Del Bío-Bío. Ha expuesto en diversos espacios culturales tales como Centro Cultural Baquedano, Casa Naranjo, Galería Cervantes de Rancagua, Casa de La Cultura De Pedro Aguirre Cerda y Casa De La Cultura De Rancagua. Durante su trayectoria ha sido seleccionada en el II concurso de Artes de la Visualidad Samuel Román con la obra “Carga Generacional”. Ha participado como artista en eventos como: La Pinche Feria, F. Stop y Noche Fem. Ha realizado como performer las siguientes acciones colaborativas: “Intervención artística colaborativa: Escribe En El Lienzo”, “Cuerpo Pintado” en 8M 2019 y “Escribe Tu Desahogo, Escribe Tu Protesta” en 8M 2024. “#PurificarLaTierra: Limpieza y Reforestación”; e individuales: “La esencia de la materia”, “Asfalto en mi Tierra” y ”Objeto cerámico Ritual”
        </div>
        <div className="CV">
          <a href={cv} download> descargar CV</a>
        </div>
      </article>
      <Footer />
    </MainLayout>
  );
}

export default PageBio;
