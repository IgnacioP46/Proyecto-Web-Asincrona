import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'kN76cW4bdYMFrh4bHyThwWyJNv4L5dEdnJmdnLfIFDQ'
});

export async function buscarFotos(query, perPage = 20) {
  try {
    const resultado = await unsplash.search.getPhotos({
      query,
      perPage
    });
    return resultado.response.results;
  } catch (error) {
    console.error('Error al buscar fotos en Unsplash:', error);
    return [];
  }
}
 