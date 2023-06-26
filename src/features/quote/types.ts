import { INoticiasNormalizadas } from "../news/Noticias";

export interface ICita {
  personaje: string;
  cita: string;
  imagen: string;
  direccionPersonaje: string;
}

export interface Modal {
  onClose: () => void
}

export interface IModalSubscribe extends Modal {
  onSubscribe: () => void,
}

export interface IModalNoticia extends Modal {
  noticia: INoticiasNormalizadas | null,
}