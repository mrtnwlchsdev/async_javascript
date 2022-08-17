// fetch() recibe como parametro el endpoint de la API a consumir
// Como resultado de la peticion HTTP realizada se retorna una promesa
// La promesa retornada puede ser manipulada mediante funciones then() y catch()

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
        const data = response.json()
        return data
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })