import React from "react";
import { MainLayout } from "../../MainLayout";
import Footer from "../../Components/Footer";
import "./style/bio.css";
import cv from "../../data/CVAbrilCarreno2026.pdf";
import foto from "../../pics/bioPic.webp";

function PageBio() {
  return (
    <MainLayout>
      <article>
        <h2>BIO</h2>
        <div className="profile_pic">
          <img src={foto} alt="profile_pic" />
        </div>
        <div className="description">
          <b>Abril Carreño Carvajal </b> <br />
          Abril Carreño Carvajal (Rancagua, Chile, 1999) es artista visual,
          mediadora cultural y docente. Licenciada en Artes con mención en Artes
          Plásticas y titulada como Pintora por la Universidad de Chile,
          desarrolla su práctica a través de la pintura, el dibujo y la
          investigación artística. Su trabajo explora las relaciones entre los
          seres humanos, los territorios y los ecosistemas, abordando
          problemáticas vinculadas a la memoria, la transformación del paisaje y
          la crisis ecológica contemporánea.
          <br />
          Su trayectoria se ha orientado al cruce entre prácticas artísticas,
          pensamiento ecológico y trabajo colaborativo, participando en
          exposiciones, publicaciones, curadurías y espacios de reflexión en
          torno al arte y la sustentabilidad. Su trabajo ha sido reconocido
          mediante premios, fondos concursables y apoyos institucionales por el
          desarrollo de proyectos que articulan prácticas artísticas, ecología y
          vinculación territorial. Actualmente es directora del proyecto
          Humano-Tierra y desarrolla la investigación visual RAMA.
          <br />
          <b>Contacto:</b>{" "}
          <a href="mailto:abrilcarrenocarvajal@gmail.com">
            abrilcarrenocarvajal@gmail.com
          </a>
        </div>
        <div className="CV">
          <a href={cv} download>
            {" "}
            descargar CV
          </a>
          <i class="fa-solid fa-file"></i>
        </div>
      </article>
      <Footer />
    </MainLayout>
  );
}

export default PageBio;
