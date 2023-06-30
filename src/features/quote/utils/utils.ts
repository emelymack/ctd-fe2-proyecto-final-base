import {
  ESTADO_FETCH,
  NOMBRE_INVALIDO,
  MENSAJE_CARGANDO,
  NO_ENCONTRADO,
} from "./constants";

/**
 * 
 * @param cita cita del personaje
 * @param estadoPedido estado del fetch
 * @returns {String} si el estado del pedido es "CARGANDO" devuelve "MENSAJE_CARGANDO", si es "ERROR", devuelve "NOMBRE_INVALIDO" y si se encuentra el personaje, devuelve cita. Si no, retorna "NO_ENCONTRADO" 
 */
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