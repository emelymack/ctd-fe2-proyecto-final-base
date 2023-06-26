import { useState } from "react";
import {
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
} from "./styled";
import Noticia from "./Noticia";
import useGetNoticias from "./hooks/useGetNoticias";
import ModalSubscribe from "./modal/ModalSubscribe";
import ModalNoticia from "./modal/ModalNoticia";

/* applied Single Responsibility Principle, Interface Segregation Principle, Dependency Inversion Principle, Open/Closed Principle in news folder */

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

const Noticias = () => {
  const noticias = useGetNoticias()
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ noticiaSeleccionada, setNoticiaSeleccionada ] = useState<INoticiasNormalizadas | null>(null)
  const [ ,setModal] = useState<INoticiasNormalizadas | null>(null);

  const showModal = (noticia: INoticiasNormalizadas) => {
    setNoticiaSeleccionada(noticia);
    setModalVisible(true);
  }
  
  const closeModal = () => {
    setModalVisible(false);
    setNoticiaSeleccionada(null);
  }

  const subscribe = () => {
    setTimeout(() => {
      alert("Suscripto!");
      setModal(null);
    }, 1000)
  }

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((noticia) => (
          <Noticia key={noticia.id} data={noticia} onClick={() => showModal(noticia)} />
        ))}
        {modalVisible && 
          noticiaSeleccionada && 
          (noticiaSeleccionada.esPremium &&
            <ModalSubscribe onSubscribe={subscribe} onClose={closeModal} /> 
          || 
          !noticiaSeleccionada.esPremium &&
            <ModalNoticia noticia={noticiaSeleccionada} onClose={closeModal} />
          )
        }
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
