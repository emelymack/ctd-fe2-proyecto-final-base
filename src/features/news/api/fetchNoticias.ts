import { obtenerNoticias } from "../fakeRest";
import { capitalize, getMinutosTranscurridos } from '../../../app/utils';

// export const obtenerInformacion = async (setNoticias: Dispatch<SetStateAction<INoticiasNormalizadas[]>>) => {
export const obtenerInformacion = async () => {
  const respuesta = await obtenerNoticias();

  const data = respuesta.map((noticia) => {
    const titulo = capitalize(noticia.titulo);
    const fechaActual = getMinutosTranscurridos(noticia.fecha);
    const descripcionCorta = noticia.descripcion.substring(0, 100);

    return {
      id: noticia.id,
      titulo,
      descripcion: noticia.descripcion,
      fecha: fechaActual,
      esPremium: noticia.esPremium,
      imagen: noticia.imagen,
      descripcionCorta
    };
  });
  return data;
};