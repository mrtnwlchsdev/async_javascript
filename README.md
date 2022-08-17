# JavaScript Asincrono

JavaScript de forma nativa es un lenguaje sincronico.

    console.log('Line 1')
    console.log('Line 2')

- El codigo es ejecutado siguiendo una secuencia de arriba hacia abajo.
- La segunda linea de codigo no puede ser ejecutada hasta que finalice la ejecucion de la primera linea.

Una ejecucion de codigo asincronico es provocada por la espera en la respuesta de un agente externo a la aplicacion (servidor web o base de datos).
Al ser JavaScript un lenguaje sincronico, las operaciones asincronicas provocan que la ejecucion del codigo se detenga, hasta que el codigo asincronico finalice su propia ejecucion.