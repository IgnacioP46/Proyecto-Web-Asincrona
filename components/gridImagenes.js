export function renderizarImagenes(imagenes) {
    const gridImagenes = document.getElementById('grid-imagenes');
    gridImagenes.innerHTML = '';
    imagenes.forEach(imagen => {
      const imgElemento = document.createElement('img');
      imgElemento.src = imagen.urls.small;
      imgElemento.alt = imagen.alt_description || 'Imagen de Unsplash';
      gridImagenes.appendChild(imgElemento);
    });
  }
  
  export function renderizarSinResultados() {
    const gridImagenes = document.getElementById('grid-imagenes');
    gridImagenes.innerHTML = `
      <div class="render-sin-resultados-container">
        <p>No se encontraron resultados. Prueba con una de estas sugerencias:</p>
        <div class="botones-container">
          <button class="boton-sugerencia" data-query="naturaleza">Naturaleza</button>
          <button class="boton-sugerencia" data-query="tecnologia">Tecnología</button>
          <button class="boton-sugerencia" data-query="personas">Personas</button>
        </div>
      </div>
    `;
  
    document.querySelectorAll('.boton-sugerencia').forEach(boton => {
      boton.addEventListener('click', (event) => {
        const query = event.target.getAttribute('data-query');
        document.getElementById('input-busqueda').value = query;
        document.getElementById('boton-buscar').click();
      });
    });
  }