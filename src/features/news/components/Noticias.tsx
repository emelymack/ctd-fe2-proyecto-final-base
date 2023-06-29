import { useEffect, useState } from "react";
import {
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
} from "../styled";
import Noticia from "./Noticia";
import useGetNoticias from "../hooks/useGetNoticias";
import ModalSubscribe from "./modal/ModalSubscribe";
import ModalNoticia from "./modal/ModalNoticia";
import { INoticiasNormalizadas } from "../types";
import Loading from "./Loading";
import ErrorFallback from "../../ErrorBoundary/ErrorFallback";

/* applied Single Responsibility Principle, Interface Segregation Principle, Dependency Inversion Principle, Open/Closed Principle in news folder */
const Noticias = () => {
  const { noticias, error, isLoading } = useGetNoticias()
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

  useEffect(() => {
    console.log({noticias, error, isLoading});
  }, [noticias])

  if(isLoading) return ( <Loading /> )
  if(error) return (
    <ErrorFallback />
  )

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((noticia) => (
          <Noticia key={noticia.id} data={noticia} onClick={() => showModal(noticia)} />
        ))}
        {modalVisible && 
          (
            noticiaSeleccionada?.esPremium && <ModalSubscribe onSubscribe={subscribe} onClose={closeModal} /> 
            || <ModalNoticia noticia={noticiaSeleccionada} onClose={closeModal} />
          )
        }
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
