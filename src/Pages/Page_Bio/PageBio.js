import React from "react";
import { MainLayout } from "../../MainLayout";
import Footer from "../../Components/Footer";
import "./style/bio.css";
import cv from "../../data/CV.docx";
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
          mediadora cultural y docente. Licenciada en Artes Visuales por la
          Universidad de Chile, su trabajo se desarrolla a través de la pintura,
          el dibujo y la investigación artística. Su práctica explora las
          relaciones entre los seres humanos, los territorios y los ecosistemas,
          abordando problemáticas vinculadas a la memoria, la transformación del
          paisaje y la crisis ecológica contemporánea.
          <br /> <br />
          Es directora del proyecto Humano-Tierra y actualmente desarrolla RAMA,
          una investigación visual que propone nuevas formas de comprender la
          interdependencia entre cuerpos humanos y no humanos. Paralelamente,
          realiza labores de mediación cultural y enseñanza de las artes
          visuales en diversos contextos educativos y comunitarios.
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
