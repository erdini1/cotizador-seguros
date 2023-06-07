import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"


const Formulario = () => {


    return (
        <>

            {/* Aca va una alerta */}

            <form action="">
                <div className="my-5">
                    <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>

                    <select name="marca" id="" className="w-full p-3 bg-white border border-gray-200">
                        <option value="">-- Seleccione Marca --</option>
                        {MARCAS.map(marca => (
                            <option
                                key={marca.id}
                                value={marca.id}
                            >
                                {marca.nombre}
                            </option>
                        ))}


                        {/* <option value={MARCAS[0].id}>{MARCAS[0].nombre}</option>
                        <option value={MARCAS[1].id}>{MARCAS[1].nombre}</option>
                        <option value={MARCAS[2].id}>{MARCAS[2].nombre}</option> */}
                    </select>
                </div>

                <div className="my-5">
                    <label htmlFor="year" className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>

                    <select name="year" id="" className="w-full p-3 bg-white border border-gray-200">
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
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <input type="submit" value="Consultar Precio" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white uppercase p-3 font-bold cursor-pointer" />

            </form>

        </>
    )
}

export default Formulario