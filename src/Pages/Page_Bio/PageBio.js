import React from "react";
import { MainLayout } from "../../MainLayout";
import Footer from "../../Components/Footer";
import "./style/bio.css";
import cv from "../../data/CV.docx";
import foto from "../../pics/bioPic.jpg";

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
          Artista visual y mediadora cultural. Nació en Rancagua, Chile, en
          1999. Actualmente reside y trabaja en Santiago. <br /> <br />
          Estudió Licenciatura en Artes Visuales en la Universidad de Chile,
          donde también se formó en mediación cultural a través del CFG
          impartido por la misma institución. Su práctica artística explora la
          relación entre el ser humano y su entorno, abordando temas de impacto
          social y memoria colectiva. <br /> <br />
          Es creadora del proyecto "Humano-Tierra", obra multidisciplinaria que
          obtuvo reconocimiento por su impacto social en el Festival
          Internacional FACES. Esta propuesta ha sido exhibida en diversos
          espacios culturales de Santiago, consolidándose como un cruce entre
          arte, educación y reflexión territorial. <br /> <br />
          Además de su producción artística, se desempeña como docente,
          integrando perspectivas críticas y metodologías participativas en su
          labor pedagógica. <br /> <br />
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
