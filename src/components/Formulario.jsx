import { Fragment, useState } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"


const Formulario = () => {

    // Podria crear los state aca para almacenar los valores del formuario pero como van a  pasar entre varios componentes lo hago desde el provider
    const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador()

    // Al ser una función local no hace falta hacerla en el provider y pasarla
    const handleSubmit = e => {
        e.preventDefault()

        // El object.values convierte listado en un array y ahi puedo aplicarle la función includes
        if(Object.values(datos).includes("")){
            setError("Todos los campos son obligatorios")
            return
        }
        setError("")

        cotizarSeguro()

    }

    return (
        <>

            {/* En caso de que haya un error debe mostrarlo, para eso necesito un componente */}
            {error && <Error/>}

            <form
                action=""
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>

                    <select
                        name="marca"
                        id=""
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.marca}
                    >
                        <option value="">-- Seleccione Marca --</option>
                        {MARCAS.map(marca => (
                            <option
                                key={marca.id}
                                value={marca.id}
                            >
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label htmlFor="year" className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>

                    <select
                        name="year"
                        id=""
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.year}
                    >
                        <option value="">-- Seleccione Año --</option>
                        {YEARS.map(year => (
                            <option
                                key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label htmlFor="plan" className="block mb-3 font-bold text-gray-400 uppercase">
                        Elige un plan
                    </label>

                    <div className="flex gap-3 items-center">
                        {PLANES.map(plan => (
                            // El fragment es para poder colocarle un key , si lo hiciera con <> no serviria
                            <Fragment key={plan.id}>
                                <label htmlFor="plan">
                                    {plan.nombre}
                                </label>
                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={e => handleChangeDatos(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <input
                    type="submit"
                    value="Consultar Precio"
                    className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white uppercase p-3 font-bold cursor-pointer"
                />

            </form>

        </>
    )
}

export default Formulario