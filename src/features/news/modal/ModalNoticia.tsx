import ContainerModal from './ContainerModal'
import { ContenedorTexto, DescripcionModal, ImagenModal, TituloModal } from '../styled'
import { IModalNoticia } from '../types';

const ModalNoticia = ({onClose, noticia}: IModalNoticia) => {
  return (
    <ContainerModal onClose={onClose}>
      <ImagenModal src={noticia?.imagen} alt={"news-image"} />
      <ContenedorTexto>
        <TituloModal>{noticia?.titulo}</TituloModal>
        <DescripcionModal>
          {noticia?.descripcion}
        </DescripcionModal>
      </ContenedorTexto>
    </ContainerModal>
  )
}

export default ModalNoticia;