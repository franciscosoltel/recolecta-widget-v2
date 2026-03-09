(function () {
  "use strict";

  var DOCUMENT_TYPES = [
    { label: "Artículo científico", value: "Artículo científico (JournalArticle)" },
    { label: "Proyecto fin de carrera", value: "Proyecto fin de carrera (BachelorThesis)" },
    { label: "Otros", value: "Otros (Other)" },
    { label: "Contribución de congreso", value: "Contribución de congreso (ConferenceOutput)" },
    { label: "Tesis doctoral", value: "Tesis doctoral (DoctoralThesis)" },
    { label: "Tesis de maestría", value: "Tesis de maestría (MasterThesis)" },
    { label: "Capítulo o parte de un libro", value: "Capítulo o parte de un libro (BookPart)" },
    { label: "Libro o monografía", value: "Libro o Monografía (Book)" },
    { label: "Reseña", value: "Reseña (Review)" },
    { label: "Artículo preliminar", value: "Artículo preliminar (WorkingPaper)" },
    { label: "Set de datos", value: "Set de datos (Dataset)" },
    { label: "Artículo de prensa", value: "Artículo de prensa (NewspaperArticle)" },
    { label: "Conferencia académica", value: "Conferencia académica (Lecture)" },
    { label: "Imagen", value: "Imagen (Image)" },
    { label: "Estudio, informe, memoria", value: "Estudio, informe, memoria (Report)" },
    { label: "Preprint", value: "Artículo científico antes de ser publicado, versión del autor (Preprint)" },
    { label: "Artículo de revisión", value: "Artículo de revisión (ReviewArticle)" },
    { label: "Patente", value: "Patente (Patent)" },
    { label: "Artículo de revisión de libro o artículo", value: "Artículo de revisión, evaluación de un libro o artículo (BookReview)" },
    { label: "Carta al director", value: "Carta al director (LetterToTheEditor)" },
    { label: "Informe científico", value: "Informe científico (ResearchReport)" },
    { label: "Software", value: "Software (Software)" },
    { label: "Sonido", value: "Sonido (Sound)" },
    { label: "Publicaciones de conferencias", value: "Publicaciones de conferencias: comunicaciones, ponencias, pósters, etc (conferenceObject)" },
    { label: "Plan de Gestión de Datos", value: "Plan de Gestión de Datos (DataManagementPlan)" },
    { label: "Recurso interactivo", value: "Recurso interactivo (InteractiveResource)" },
    { label: "Artículo de software", value: "Artículo de software (SoftwarePaper)" },
    { label: "Propuesta de investigación", value: "Propuesta de investigación (ResearchProposal)" },
    { label: "Obra artística", value: "Obra artística (ArtisticWork)" },
    { label: "Nota a un texto de jurisprudencia", value: "Nota a un texto de jurisprudencia (annotation)" }
  ];

  function init() {
    var container = document.querySelector("[data-recolecta-widget]");
    if (!container) return;

    var title = container.getAttribute("data-title") || "Resultados de investigación";
    var eyebrow = container.getAttribute("data-eyebrow") || "BUSCADOR RECOLECTA";
    var intro = container.getAttribute("data-intro") || "Busca publicaciones en acceso abierto y accede al buscador de RECOLECTA con los filtros ya aplicados.";
    var placeholder = container.getAttribute("data-placeholder") || "Título, autor, palabras clave...";
    var buttonText = container.getAttribute("data-button-text") || "Buscar";
    var chip1 = container.getAttribute("data-chip-1") || "Acceso abierto";
    var chip2 = container.getAttribute("data-chip-2") || "Publicaciones";
    var newTab = container.getAttribute("data-new-tab");
    var openInNewTab = newTab === null ? true : newTab !== "false";

    container.innerHTML = `
<div class="wrap">
  <div id="recolecta-widget-mount">
    <div class="platica-recolecta-widget" role="search" aria-label="Buscador de publicaciones en acceso abierto">
      <div class="platica-recolecta-widget__inner">
        <div class="platica-recolecta-widget__content">
          <p class="mb-2">
            <a href="http://www.ciencia.gob.es/" rel="noopener" target="_blank">
              <img alt="Ministerio de Ciencia" src="https://www.fecyt.es/sites/all/themes/custom/fecyt/images/logo-ministerio.svg">
            </a>
            <a href="http://www.fecyt.es/" rel="noopener" target="_blank" style="position: relative; right: 3px;">
              <img alt="FECYT" src="https://www.fecyt.es/sites/all/themes/custom/fecyt/images/logo-fecyt.svg">
            </a>
            <a href="https://recolecta.fecyt.es/" rel="noopener" target="_blank" style="position: relative; right: 3px;">
              <img alt="RECOLECTA" src="https://recolecta.fecyt.es/sites/default/files/images/logo.svg">
            </a>
          </p>

          <p class="platica-recolecta-widget__eyebrow">${eyebrow}</p>
          <h3 class="platica-recolecta-widget__title">${title}</h3>
          <p class="platica-recolecta-widget__intro">${intro}</p>

          <form id="platicaRecolectaForm" class="platica-recolecta-widget__form">
            <div class="platica-recolecta-widget__searchbar">
              <div class="platica-recolecta-widget__field platica-recolecta-widget__field--search">
                <label for="recolectaQuery">Búsqueda por texto completo</label>
                <input
                  type="text"
                  id="recolectaQuery"
                  name="search_api_fulltext"
                  placeholder="${placeholder}"
                  autocomplete="off"
                >
              </div>

              <div class="platica-recolecta-widget__field platica-recolecta-widget__field--select">
                <label for="recolectaType">Tipo de documento</label>
                <select id="recolectaType" name="subject_facet">
                  <option value="">Todos los tipos</option>
                </select>
              </div>

              <div class="platica-recolecta-widget__actions">
                <button type="submit" class="platica-recolecta-widget__button">${buttonText}</button>
              </div>
            </div>

            <div class="platica-recolecta-widget__footer">
              <div class="platica-recolecta-widget__fixed-filters">
                <span class="platica-recolecta-widget__chip">${chip1}</span>
                <span class="platica-recolecta-widget__chip">${chip2}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    `;

    var select = document.getElementById("recolectaType");

    DOCUMENT_TYPES.forEach(function (t) {
      var o = document.createElement("option");
      o.value = t.value;
      o.textContent = t.label;
      select.appendChild(o);
    });

    document.getElementById("platicaRecolectaForm").addEventListener("submit", function (e) {
      e.preventDefault();

      var query = document.getElementById("recolectaQuery").value.trim();
      var type = select.value;

      var params = new URLSearchParams();
      params.set("search_api_fulltext", query);
      params.set("rights[1]", "1");
      params.set("document-type-no[1]", "");
      params.set("repositoryname", "");
      params.set("document-type", "");
      params.set("document-type-no", "");
      params.set("identifier_1", "");

      if (type) {
        params.append("f[0]", "subject_facet:" + type);
      }

      var url = "https://buscador.recolecta.fecyt.es/buscador-recolecta?" + params.toString();

      if (openInNewTab) {
        window.open(url, "_blank");
      } else {
        window.location.href = url;
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();