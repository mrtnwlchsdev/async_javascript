// Una callback function es una funcion pasada como argumento a otra funcion

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        if (response.ok && response.status === 200) {
            return response.json()
        } else {
            throw new Error('No data')
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error.message)
    })

// Las funciones then y catch reciben como parametro una funcion de tipo flecha
// La funcion then() es ejecutada cuando la peticion ha sido correcta
// La funcion catch() captura cualquier error que ocurra en la peticion