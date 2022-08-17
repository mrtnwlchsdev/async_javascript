// Caracteristica de EM6 que permite manipular promesas de forma organizada
// La palabra async se utiliza para definir una funcion asincrona
// La palabra await se utiliza para detener la ejecucion de una funcion asincrona, hasta que la promesa que precede sea resuelta
// La palabra await solo puede ser utilizada dentro de funciones async

const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
}

// El valor retornado a la funcion async es una promesa
// Mediante el uso de las funciones then() y catch() se podra manipular la funcion cuyo valor retornado es una promesa 

getData()
    .then(data => {
        console.log(data)
    })