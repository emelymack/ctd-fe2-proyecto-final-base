import { INoticiasNormalizadas } from "./Noticias";

export interface Modal {
  onClose: () => void
}

export interface IModalSubscribe extends Modal {
  onSubscribe: () => void,
}

export interface IModalNoticia extends Modal {
  noticia: INoticiasNormalizadas | null,
}