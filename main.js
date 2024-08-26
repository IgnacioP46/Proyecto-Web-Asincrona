import './style/style.css'
import { buscarFotos } from './components/api/unsplash.js';
import { renderizarImagenes, renderizarSinResultados } from './components/gridImagenes.js';

document.addEventListener('DOMContentLoaded', async () => {
  mostrarLoader(true);
  const imagenesDestacadas = await buscarFotos('popular', 20);
  if (imagenesDestacadas.length > 0) {
    renderizarImagenes(imagenesDestacadas);
  }
  mostrarLoader(false);
});

document.getElementById('boton-buscar').addEventListener('click', async () => {
  const query = document.getElementById('input-busqueda').value;
  const categoria = document.getElementById('categoria-busqueda').value;
  let busquedaFinal = query;

  if (!query && categoria) {
    busquedaFinal = categoria;
  }

  if (busquedaFinal) {
    mostrarLoader(true);
    const imagenes = await buscarFotos(busquedaFinal, 20);
    if (imagenes.length > 0) {
      renderizarImagenes(imagenes);
    } else {
      renderizarSinResultados();
    }
    mostrarLoader(false);
  }
});

function mostrarLoader(estado) {
  const loader = document.getElementById('loader');
  const main = document.getElementById('grid-imagenes');
  if (estado) {
    loader.classList.remove('hidden');
    main.style.opacity = '0.5';
  } else {
    loader.classList.add('hidden');
    main.style.opacity = '1';
  }
}