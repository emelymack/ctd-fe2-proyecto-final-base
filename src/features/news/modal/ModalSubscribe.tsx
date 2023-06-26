import ContainerModal from './ContainerModal'
import { BotonSuscribir, ContenedorTexto, DescripcionModal, ImagenModal, TituloModal } from '../styled'
import { SuscribeImage } from "../../../assets";
import { IModalSubscribe } from '../types';

const ModalSubscribe = ({onClose, onSubscribe}: IModalSubscribe) => {
  return (
    <ContainerModal onClose={onClose}>
      <ImagenModal src={SuscribeImage} alt={"mr-burns-excellent"} />
      <ContenedorTexto>
        <TituloModal>{"Suscríbete a nuestro Newsletter"}</TituloModal>
        <DescripcionModal>
          {"Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos."}
        </DescripcionModal>
        <BotonSuscribir onClick={onSubscribe}>
          Suscríbete
        </BotonSuscribir>
      </ContenedorTexto>
    </ContainerModal>
  )
}

export default ModalSubscribe