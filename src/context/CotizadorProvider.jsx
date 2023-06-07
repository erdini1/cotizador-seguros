import { createContext, useState } from "react";

/* Es recomendable que el context y el provider tengan el mismo nombre */
// de esta forma el conteizadorCotnext ya va a tener un context creado
const CotizadorContext = createContext()

// un provider es de donde vienen los datos, cual es la fuenta de los datos. un provider es una función normal

const CotizadorProvider = ({ children }) => {

    const [modal, setModal ] = useState(false)

    return (
        // Una vex que lo paso dentro del value lo hago disponible dentro de toda la aplicación
        <CotizadorContext.Provider
            value={{
                modal,
                setModal
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}


export {
    CotizadorProvider
}
export default CotizadorContext