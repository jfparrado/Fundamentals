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

## FACADE

# PATRONES DE COMPORTAMIENTO

## OBSERVER
