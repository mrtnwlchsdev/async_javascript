// El encadenamiento de promesas permite ejecutar una promesa tras otra de forma ordenada

const getData = (url) => {
    return new Promise((resolve,reject) => {
        fetch(url)
            .then(res => {
                if (res.ok && res.status === 200) {
                    resolve(res.json())
                } else {
                    reject('No data')
                }
            })
    })
}

getData('https://jsonplaceholder.typicode.com/todos')
    .then(todos => {
          console.log(todos)
          return getData('https://jsonplaceholder.typicode.com/users')
    }).then(users => {
        console.log(users)
        return getData('https://jsonplaceholder.typicode.com/comments')
    }).then(comments => {
        console.log(comments)
    }).catch(err => {
        console.log(err)
    })

// En el ejemplo anterior se realiza el encadenamiento de 3 promesas referenciadas mediante el metodo getData()
// getData() recibe un parametro, el cual apunta al endpoint donde se realizara la peticion HTTP
// Las funciones then() se encargaran de mostrar por consola el JSON obtenido de la peticion
// Todas las promesas tendran una unica funcion catch()
// La funcion catch() se ejecutara cada vez que una promesa sea rechazada