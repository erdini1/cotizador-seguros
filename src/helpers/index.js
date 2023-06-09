export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year
}

export function calcularMarca(marca) {
    let incremento

    switch (marca) {
        case "1":
            incremento = 1.3
            break;
        case "2":
            incremento = 1.15
            break;
        case "3":
            incremento = 1.05
            break;
        default:
            break
    }

    return incremento
}

export function calcularPlan(plan) {
    let incremento
    if(plan === "1"){
        incremento = 1.2
    } else{
        incremento = 1.5
    }
    return incremento
}

export function formatearDinero(cantidad){
    return cantidad.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })
}