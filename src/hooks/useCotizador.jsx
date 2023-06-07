// Lo ideal es hacer un hook para cada uno de los contexts para tener mejor organizado

import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

const useCotizador = () => {
    return useContext(CotizadorContext)
}

// para hacerlo disponible en todos los archivos
export default useCotizador