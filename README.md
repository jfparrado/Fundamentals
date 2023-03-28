# Fundamentals

## OOP, DOM, SOLID, DRY

## OOP

Encapsulacion
Se crean objetos con sus respectivas propiedades y metodos que estan dentro de este objeto. la idea es que las funciones dentro del objeto sean mas faciles de mantener

Abstraccion
Se utiliza el concepto de caja negra en el que se utilizan funciones simples que al llamrlas hacen un proceso complejo pero sin necesidad de mostrar lo que hacen internamente y asi al hacerle cambios no van a interferir ya que desde un principio lo unico que se hacia desde afuera era hacer el llamado

Herencia
se definen propiedades y metodos de un "padre" y luego estas van a ser heredadas por otros objetos mas especificos para asi no tner que definir las mismas cosas multiples veces cuando en realidad son lo mismo.

Poliformismo
Las funciones las cuales son heredadas del "padre" pueden comportarse de formas diferentes dependiendo del "hijo" que las llame

## DOM

La forma en la que javascript puede acceder al documento HTML como si estos fueran nodos y objetos.

## SOLID

Una serie de practicas para codear mas limpiamente.
S. Responsibilidad unica: cada parte del codigo se encarga de una sola cosa como añadir, borrar, modificar, etc..
O. Abierto cerrado: una clase debe tener la posibilidad de poder añadirle metodos nuevos en lugar de moficar codigo existente
L. Substitucion: deberian poderse usar los objetos hijos para substituir al padre para que de el mismo resultado.
I. Segregacion de interfaz: las interfaces que se crean deben tener una finalidad concreta. es mejor tener muchas que cada una haga una cosita y no una que haga muchas cosas.
D. Inversion de dependencias: deberia usarse mas abstracciones que clases completas.
Deberia crearse una clase la cual tenga unicamente nombre de las funciones y lo que recibiran, luego en otra capa otra clase que extienda a la primera y en la cual se defina la logica y finalmente otra capa que heredara todo lo de la anterior. De esta manera el codigo será mas flexible

## DRY

Dont repeat yourself.
Si algo se usa mas de una vez y funciona igual dentro de 2 lugares diferentes, lo mejor es crear una funcion que se pueda llamar varias veces
