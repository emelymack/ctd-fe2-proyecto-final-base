import { INoticiasNormalizadas } from "../Noticias";
import { useState, useEffect } from 'react';
import { obtenerInformacion } from "./fetchNoticias";

const useGetNoticias = (): INoticiasNormalizadas[] => {
  const [ noticias, setNoticias ] = useState<INoticiasNormalizadas[]>([])
  useEffect(() => {
    obtenerInformacion(setNoticias)
  })
  return noticias;
}

export default useGetNoticias;