import { Dispatch, SetStateAction } from "react";
import { obtenerNoticias } from "../fakeRest";
import { INoticiasNormalizadas } from "../Noticias";
import { capitalize, getMinutosTranscurridos } from "../../quote/utils";

export const obtenerInformacion = async (setNoticias: Dispatch<SetStateAction<INoticiasNormalizadas[]>>) => {
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

  setNoticias(data);
};