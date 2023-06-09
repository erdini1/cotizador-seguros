import Formulario from "./Formulario"
import Spinner from "./Spinner"
import Resultado from "./Resultado"
import useCotizador from "../hooks/useCotizador"

const AppSeguro = () => {

    const { cargando } = useCotizador()
    
    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center font-bold text-4xl">Cotizador de Seguros de Auto</h1>
            </header>

            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Formulario />

                {cargando ? <Spinner/> : <Resultado/>}

            </main>
            
        </>
    )
}

export default AppSeguro
