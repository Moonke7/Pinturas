import React from "react";
import { MainLayout } from "../../MainLayout";
import Footer from "../../Components/Footer";
import "./Tienda.css";

// Assets
import ag_clases from "../../pics/Pagina web/Tienda/afiche_clases.webp";
import pdf_clases from "../../pics/Pagina web/Tienda/Clases.pdf";

function TiendaPage() {
  return (
    <MainLayout>
      <section className="tienda-container">
        <div className="tienda-grid">
          <div className="tienda-card">
            <a href={pdf_clases} className="tienda-image-link" download>
              <img
                src={ag_clases}
                alt="Afiche Clases"
                className="tienda-image"
              />
            </a>
            <div className="tienda-info">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <a href={pdf_clases} className="tienda-legend" download>
                  Curso de figura Humana con modelo
                </a>
              </div>
              <a
                href={pdf_clases}
                download
                className="tienda-download-icon"
                aria-label="Descargar información del curso"
              >
                <i className="hgi hgi-stroke hgi-download-04"></i>
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
