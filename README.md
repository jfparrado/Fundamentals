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

## HTTP VS HTTP2

HTTP: Se usan los verbos GET,POST,PUT,DELETE,etc y la web se empezaba a orientar a recursos (REST)
tanto las respuestas como las peticiones se realizan a través de texto plano.

HTTP2 es un protocolo binario que conserva la misma semántica que el protocolo HTTP1.X
MULTIPLEXED STREAMS: enviamos muchas peticiones y respuestas diferentes a través de una misma conexión.
Como graphQL desde un prinicipio ya solo enviaba un request en http2 su mejora no fue significativa mientras que para REST si.

SERVER PUSH: cuando suple una página HTML puede enviar los archivos de CSS, imágenes o fuentes antes de que el navegador haya interpretado el contenido HTML y los solicite, así que cuando el navegador los necesita estos recursos disponibles de inmediato.
En el rendimiento ambos se vieron beneficiados

COMPRESION DE HEADERS: todas las cabeceras se empaquetan en un solo bloque comprimido para ser enviados como una unidad. Se envían y una vez finalizada la transmisión, se decodifica el bloque de cabeceras del otro lado.
Con graphQL puede que su formato no este soportado mientras que REST se ve mas beneficiado ya que no hay problemas con json o xml

FORMATO BINARIO EN LUGAR DE TEXTO: Los protocolos binarios son más eficientes para interpretar, más compactos al ser transportados, y son mucho menos propenso a errores comparado con los protocolos basados en texto
SEGURIDAD: Se usa la encriptacion TLS en todas las conexiones

### GRAPHQL VS REST

Traer la informacion:
REST APIs requir+en muchos endpoints para traer la informacion, mientras GraphQL APIs permite traer la informacion exacta en una sola peticion

Formato de respuesta:
REST APIs regresan JSON o XML en un formato estandar, mientras GraphQL APIs regresan JSON en el formato que se les defina.

Caching:
REST APIs are easily cached because they rely on HTTP caching mechanisms, whereas GraphQL APIs can be more difficult to cache due to the dynamic nature of the data requests.

Documentacion:
REST APIs son documentedas usando herramientas como Swagger o OpenAPI, mientras GraphQL APIs incluyen auto documentacion facil de leer.

Herramientas:
REST APIs tienen muchas herramientas disponibles, incluyendo librerias del cliente, testeo y frameworks de testeo, mientras GraphQL tiene herramientas que hasta ahora estan siendo desarrolladas

## HTML mejores practicas

Empezar con Doctype de forma simple y no usar una declaracion XML

<!DOCTYPE html>
<html>
  ...
</html>

Tratar de no usar referencias a caracteres mientras sea posible a menos de que se trate de los signos &, <, >, ", ', para mantener el codigo libre de bugs
ej: esto si © , esto no &copy;
ej:esto si &quot;&amp;&quot; esto no """

Para numeros utilizar el codigo del numero en lugar del numero como tal
ej: esto si: 1&#xA0; , esto no: 1

Usar espacios antes y depues de un comentario
ej: esto si: <!-- comment --> , esto no:<!--comment-->

Siempre poner tag de cierre
ej: <html><body></body></html>

Ser consistente en el uso de tags que pueden cerrarse solos. todos en el codigo deber usarse de la misma forma
ej:  
<img alt="HTML Best Practices" src="/img/logo.png">

<hr>

No usar espacios al rededor de los tags
ej: no hacer

<h1 class=" title " >HTML Best Practices</h1>

No mezclar mayusculas y minuscular
ej de no: <a HREF="#general">General</A>

No mezclar diferentes comillas
ej no: <img alt="HTML Best Practices" src='/img/logo.jpg'>

No separar atributos con 2 o mas espacion
ej no: <input   name="q"  type="search">

Omitir atributos booleanos:
ej:
no: <audio autoplay="autoplay" src="/audio/theme.mp3">
si: <audio autoplay src="/audio/theme.mp3">

Añadir el atributo lang y mantenerlo corto. si el idioma solo se habla uen un pais no hay necesidad de poner el pais
ej: <html lang="en-US">

Añadir el title en el head
ej:

<head>
  <meta charset="UTF-8">
  <title>HTML Best Practices</title>
</head>

especificar la codificacion de caracteres, siempre al inicio y usando UTF-8
ej:

<head>
<meta charset="UTF-8">  <!--  esto es  -->
  <meta content="width=device-width" name="viewport">
  ...
</head>

No usar comentarios dentro de estilo
ej:

<style>
<!--  -->
</style>

Los escripts van agrupados y los links tambien. no mexclar
ej no:

<script src="/js/jquery.min.js"></script>
<link href="/css/screen.css" rel="stylesheet">
<script src="/js/main.js"></script>

usar el elemento address solo para informaciond e contacto
ej:
no: <address>No rights reserved.</address>
si: <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>

Utilizar un elemento li por linea
ej no:

<ul>
  <li>General</li><li>The root Element</li><li>Sections</li>...
</ul>

Usar figcaption antes o despues de las figuras
ej:

<figure>
  <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
  <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
  <figcaption>“HTML Best Practices” Cover Art</figcaption>
</figure>

evitar los divs tanto como sea posible
ej:

<section>
  ...
</section>

utilizar el atributo download
<a download href="/downloads/offline.zip">offline version</a>

no usar comillas en elemento q
ej: <q>“For writing maintainable and scalable HTML documents”</q>

añadirle titulo al compoennte abbr
ej: <abbr title="HTML Best Practices">HBP</abbr>

añadir datetime para el elemento time
<time datetime="2014-12-19">Dec 19, 2014</time>

Usar enter depues de un elemento br
ej:
no:<p>HTML<br>Best<br>Practices</p>
si:

<p>HTML<br>
Best<br>
Practices</p>

Agregar alt al img si se necesita. si no sse necesita evitarlo
ej: <img alt="HTML Best Practices" src="/img/logo.png">

añadir titulo cuando el input tenga un patron
ej <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">

Para un elemento progress ponerle value
ej: <progress value="0.5"> 50%</progress>

Poner min y max en el elemento meter
<meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>

no poner comentarios dentro de scripts
ej no:

<script>
// <!--
//   ...
// -->
</script>

## Composition VS Inheritance

### Composition

-Cuando no se sabe que propiedades usara el hijo se recomienda pasarlas como props
-Se pueden pasar componentes como props si estan dentro del tag de un componente para que tengan directamente acceso a las props del padre
ej:<SplitPane left={<Contacts />} right={<Chat />} />

### Inheritance

Es mejor usar composiscion que inheritance. en el caso de que se requiera reutilizar funcionalidades no UI se recomienda crear un componente especial con estas funcionalidades y luego pasarsela a los compoenntes que lo necesiten
