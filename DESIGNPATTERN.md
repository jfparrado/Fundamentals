# PATRONES ESTRUCTURALES

## ADAPTER

Permite que objetos con interfaces incompatibles puedan colaborar
EJ: se recibe informacion en XML y se necesita que este en JSON
Solucion: Se crea un objeto que convierte la interfaz de uno en la del otro.
El adaptador envuelve a uno o a los dos objetos para que estos se puedan comunicar.

Cliente: Contiene la logica del programa
Interfaz del cliente: Describe la interfaz que se debe segir para poder colaborar con el codigo del cliente
Servicio: Un 3rd party application que generalmente tiene una interfaz diferente
Adaptador: Implementa la interfaz del cliente mientras envuelve al servicio. recibe llamados del cliente y los traduce para el servicio

### CLASE ADAPTER

Hereda la interface de ambos objetos, esto solo funciona en lenguages que soportan que una clase pueda heredar de mas de una otra clase

PROS VS CONS
Pros:
-Se puede separar la interfaz de la logica de negocio
-Se pueden introducir nuevos metodos sin cambiar la logica existente

CONS:
-La complejidad del negocio aumenta. aveces es mas facil simplemente cambiar el servicio

## PROXY

Crea un subsitituto para otro objeto, permitiendo realizar algo antes o despues de llegar a el.
Usos:
-Cuando el servicio que se requiere es muy pesado entonces en vez de inicializarse desde el inicio cuando no es necesario, se hace unicamente cuando si se necesita. por eso se le crea un proxy.
-Cuando antes de usar el servicio primero hay que pasar una verificacion de credenciales.
-Cuando el resultado es muy grande y siempre dara lo mismo el proxy puede guardar este resultado previsible.
-El proxy puede cada cierto tiempo y ver si los clientes siguen activos o no para liberar los recursos que se estaban consumiendo

1. Se extrae la interfaz del servicio con un campo que guarda la referencia al servicio
2. Implementar el proxy antes o despues del servicio segun se requiera
3. Considerar en que casos el cliente recibira respuesta del proxy o del servicio
4. Considerar una inicializacion perezosa

Pros:
-Se puede controlar el servicio sin que el cliente lo sepa
-Se puede manejar eficientemente el ciclo de vida del servicio
-El proxy funciona aun cuando el servicio no esta listo

CONS:
-El codigo se vuelve mas complicado
-Puede haber una demora en la respuesta del servicio

## FACADE

Es una interfaz simplificada de una libreria, framework o una clase compleja
Sirve para que el cliente pueda interactuar de forma sencilla con un sistema complejosEj al llamar a comprar online una voz recibe la orden luego por el otro lado inicia un complejo fluo con prooveedores, logistic, tiendas y demas.

Usos:
-Cuando haya que tener un enfoque especifico dentro de un sistea complicado

1. Ver si se puede simplificar la interfaz del subsistema
2. Declarar e implementar una clase de la fachada, recibiendo informacion y redirigiendola a los lugares correctos del codigo y tambien controlar el ciclo de vida del componente

Pros:
-Se puede aislar el codigo de la complejidad del sistema

CONS:
-Se puede volver un componente del que todo lo demas dependa

# PATRONES DE COMPORTAMIENTO

## OBSERVER

Permite definir un mecanismo que le informa a multiples objetos cuando haya algun cambio en el objeto de observacion

Usos:
-Cuando cambiso en el estado de un objeto puedan requerir qque cambie otro objeto
-Cuando unos objetos necesiten ver el cambio de otros pero slo por un periodo especifico de tiempo

1. Identificar que objetos son independientes
2. Declarar la interfaz de suscripcion con un metodo de update
3. Declarar la interfaz del publisher y añadir metodo para añadir y eliminar suscriptores
4. Crear hijos de esta ilterfaz de publisher

Pros:
-Open/close principle
-Se pueden establecer relaciones entre objetos mientras el codigo corre

CONS:
-Los ubscriptores son informados un un orden aleatorio
