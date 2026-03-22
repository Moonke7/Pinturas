import React from "react";
import { MainLayout } from "../../MainLayout";
import Footer from "../../Components/Footer";
import "./Tienda.css";

// Assets
import ag_catalogo from "../../pics/Pagina web/Tienda/afiche_catalogo.webp";
import ag_clases from "../../pics/Pagina web/Tienda/afiche_clases.webp";
import pdf_catalogo from "../../pics/Pagina web/Tienda/Catalogo.pdf";
import pdf_clases from "../../pics/Pagina web/Tienda/Clases.pdf";

function TiendaPage() {
  return (
    <MainLayout>
      <section className="tienda-container">
        <div className="tienda-grid">
          <div className="tienda-card">
            <a
              href="https://drive.google.com/file/d/1AD-fTbY7UOArsLeH6wzIcbJHwmEYlIK1/view?usp=drive_link"
              className="tienda-image-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ag_catalogo}
                alt="Afiche Catálogo"
                className="tienda-image"
              />
            </a>
            <div className="tienda-info">
              <a
                href="https://drive.google.com/file/d/1AD-fTbY7UOArsLeH6wzIcbJHwmEYlIK1/view?usp=drive_link"
                className="tienda-legend"
                target="_blank"
                rel="noreferrer"
              >
                Catalogo 2026 Abril Carreño Carvajal
              </a>
              <a
                href={pdf_catalogo}
                download
                className="tienda-download-icon"
                aria-label="Descargar catálogo virtual"
              >
                <i class="hgi hgi-stroke hgi-download-04"></i>
              </a>
            </div>
          </div>

          <div className="tienda-card">
            <a
              href="https://drive.google.com/file/d/1F0Zrk4E_z0XPUJbJ_w6hJBKBxlmMZBFf/view?usp=sharing"
              className="tienda-image-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ag_clases}
                alt="Afiche Clases"
                className="tienda-image"
              />
            </a>
            <div className="tienda-info">
              <a
                href="https://drive.google.com/file/d/1F0Zrk4E_z0XPUJbJ_w6hJBKBxlmMZBFf/view?usp=sharing"
                className="tienda-legend"
                target="_blank"
                rel="noreferrer"
              >
                Curso de figura Humana con modelo
              </a>
              <a
                href={pdf_clases}
                download
                className="tienda-download-icon"
                aria-label="Descargar información del curso"
              >
                <i class="hgi hgi-stroke hgi-download-04"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </MainLayout>
  );
}

export default TiendaPage;
