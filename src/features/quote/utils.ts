import {
  ESTADO_FETCH,
  NOMBRE_INVALIDO,
  MENSAJE_CARGANDO,
  NO_ENCONTRADO,
} from "./constants";

export const obtenerMensaje: (
  cita: string,
  estadoPedido: ESTADO_FETCH
) => string = (cita, estadoPedido) => {
  if (estadoPedido === ESTADO_FETCH.CARGANDO) {
    return MENSAJE_CARGANDO;
  }

  if (estadoPedido === ESTADO_FETCH.ERROR) {
    return NOMBRE_INVALIDO;
  }

  return cita ? `${cita}` : NO_ENCONTRADO;
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getMinutosTranscurridos = (date: Date): string => {
  const minutosTranscurridos = Math.floor((Date.now() - date.getTime()) / 60000);
  return `Hace ${minutosTranscurridos} minutos`;
} 