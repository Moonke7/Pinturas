import React from "react";
import { MainLayout } from "../../MainLayout";
import Footer from "../../Components/Footer";
import "./Tienda.css";

// Assets
import ag_taller_pro from "../../pics/Pagina web/Tienda/afiche_taller_pro.png";
import ag_taller_modelo from "../../pics/Pagina web/Tienda/afiche_taller_modelo.png";
import ag_taller_after from "../../pics/Pagina web/Tienda/afiche_taller_after.png";
import ag_catalogo from "../../pics/Pagina web/Tienda/afiche_catalogo.webp";
import ag_clases from "../../pics/Pagina web/Tienda/afiche_clases.webp";
import pdf_taller_modelo from "../../pics/Pagina web/Tienda/taller_figura_humana_con_modelo.pdf";
import pdf_taller_after from "../../pics/Pagina web/Tienda/taller_pintura_after_school.pdf";
import pdf_catalogo from "../../pics/Pagina web/Tienda/Catalogo.pdf";
import pdf_clases from "../../pics/Pagina web/Tienda/Clases.pdf";

function TiendaPage() {
  return (
    <MainLayout>
      <section className="tienda-container">
        <div className="tienda-grid">
          {/* Taller pintura y proyecto */}
          <div className="tienda-card">
            <a href={ag_taller_pro} className="tienda-image-link" target="_blank" rel="noopener noreferrer">
              <img
                src={ag_taller_pro}
                alt="Afiche Taller Pintura y Proyecto"
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
                <a href={ag_taller_pro} className="tienda-legend" target="_blank" rel="noopener noreferrer">
                  Taller de Pintura y Proyecto
                </a>
              </div>
              <a
                href={ag_taller_pro}
                target="_blank"
                rel="noopener noreferrer"
                className="tienda-download-icon"
                aria-label="Abrir imagen del taller de pintura y proyecto"
              >
                <i className="hgi hgi-stroke hgi-download-04"></i>
              </a>
            </div>
          </div>

          {/* Taller con modelo */}
          <div className="tienda-card">
            <a href={pdf_taller_modelo} className="tienda-image-link" download>
              <img
                src={ag_taller_modelo}
                alt="Afiche Taller con Modelo"
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
                <a href={pdf_taller_modelo} className="tienda-legend" download>
                  Taller de Figura Humana con Modelo
                </a>
              </div>
              <a
                href={pdf_taller_modelo}
                download
                className="tienda-download-icon"
                aria-label="Descargar información del taller con modelo"
              >
                <i className="hgi hgi-stroke hgi-download-04"></i>
              </a>
            </div>
          </div>

          {/* Taller after */}
          <div className="tienda-card">
            <a href={pdf_taller_after} className="tienda-image-link" download>
              <img
                src={ag_taller_after}
                alt="Afiche Taller After School"
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
                <a href={pdf_taller_after} className="tienda-legend" download>
                  Taller After School de Pintura
                </a>
              </div>
              <a
                href={pdf_taller_after}
                download
                className="tienda-download-icon"
                aria-label="Descargar información del taller after school"
              >
                <i className="hgi hgi-stroke hgi-download-04"></i>
              </a>
            </div>
          </div>

          {/* Catálogo 2026 */}
          <div className="tienda-card">
            <a href={pdf_catalogo} className="tienda-image-link" download>
              <img
                src={ag_catalogo}
                alt="Afiche Catálogo"
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
                <a href={pdf_catalogo} className="tienda-legend" download>
                  Catalogo 2026 Abril Carreño Carvajal
                </a>
                <span style={{ fontSize: "0.85em", color: "#555" }}>
                  Clave: 2026
                </span>
              </div>
              <a
                href={pdf_catalogo}
                download
                className="tienda-download-icon"
                aria-label="Descargar catálogo virtual"
              >
                <i className="hgi hgi-stroke hgi-download-04"></i>
              </a>
            </div>
          </div>

          {/* Curso humano */}
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
