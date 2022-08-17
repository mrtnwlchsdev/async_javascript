// Una promesa retorna el resultado eventual de una operacion asincrona
// Una promesa puede tener 3 estados distintos: pendiente, resuelta o rechazada

const getData = () => {
    return new Promise((resolve,reject) => {
        const networkConnection = false
        setTimeout(() => {
            if (networkConnection) {
                resolve('Success')
            } else {
                reject('Failure')
            }
        }, 3000)
    })
}

getData()
    .then(data => {
        console.log(data)
    })
    .catch(data => {
       console.log(data) 
    })

// El metodo then() ejecuta la informacion pasada como parametro al argumento resolve
// El metodo catch() ejecuta la informacion pasada como parametro al argumento reject