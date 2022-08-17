// Las peticiones HTTP permiten obtener informacion desde un servidor
// Las peticiones HTTP son realizadas a traves de endpoints
    
    /* https://www.musicapi.com/artist/moby */

// La URL anterior especifica el endpoint desde el cual se obtendran los datos de la API
// Los datos obtenidos estaran en formato JSON

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

// Mediante la fetch API es posible realizar peticiones al servidor
// En el ejemplo anterior se realiza una peticion HTTP GET al endpoint especificado
// Una peticion HTTP GET tipica es cuando se realiza una busqueda en el navegador

/* CODIGOS DE ESTADO */
// Cada peticion HTTP realizada viene acompañada de un codigo de estado.
// Los codigos de estados son un estandar que especifica el resultado de la peticion HTTP
// En el ejemplo anterior se obtiene un codigo de estado con valor de 200, ya que la peticion ha sido realizada correctamente.
// Otro codigo de estado comun es 404, el cual especifica un error en la peticion HTTP realizada desde el lado del cliente.