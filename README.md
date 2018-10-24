El proyecto a continuación es el resultado de realizar la siguiente prueba: [Enunciado](https://github.com/fcontreras2/Esquina-Caliente/tree/develop/docs). Resumen, el sistema permitirá manejar los pedidos de comida de un restaurante, en una versión tablet.


## CONTENIDO


- [Introducción](#introduccion)
- [Instalación](#instalacion)
- [Observaciones](#observaciones)
- [DEMO](#demo)
- [Tecnologías](#tecnologias)
- [Datos de prueba](#datos-de-pruebas)


### Introducción


  El presente sistema permite al usuario (mesero) poder registrar los pedidos de los clientes del restaurante Esquina Cliente. Como un requerimiento principal es poder visualizar el sistema en su versión Tablet utilizando tecnologías Web [Enunciado](https://github.com/fcontreras2/Esquina-Caliente/tree/develop/docs). Actualmente el sistema cuenta con las siguientes funciones:
  
  * Ver el menú de las comidas.
  * Poder filtrar los tipos de comida (Desayuno / Almuerzo)
  * Agregar y eliminar una comida al pedido.
  * Aumentar o disminuir la cantidad pedidos por comida.
  * Previsualizar y confirmar el pedido actual.
  * Ver el listado de pedidos (Pendientes / History)
  * Ver pedidos pendientes.
  * Confirmar un pedido pendiente.
  * Ver historial de pedidos procesados.
  


## Instalación
Para poder ejecutar el siguiente proyecto debe tener instalado: 
  - [GIT](https://git-scm.com/)
  - [NPM](https://www.npmjs.com/)


Luego debe ejecutar los siguientes comandos en la terminal:
 - `git clone git@github.com:fcontreras2/Esquina-Caliente.git`
 - `cd Esquina-Caliente`
 - `git fetch && git checkout develop`
 - `npm install`
 - `npm run start`


### Observaciones
  
  Antes de inspeccionar el resultado del proyecto, es recomendable poder revisar las siguientes observaciones:
  
  * **IMPORTANTE**: El demo del proyecto (Backend/Frontend) se encuentra alojado en una versión gratuita de Heroku, por esta razón el sistema tardará  un poco mostrarse. Se recomienda realizar varias veces la recarga (F5).
  * El requerimiento del Login de usuario no se completo por cuestiones de tiempo.
  * No se ha aplicado testing a los componentes del sistema.
  * El diseño es elaborado de mi propia autoría buscando solo usabilidad.
  
### DEMO
   
   Para poder ver el demo ingresa al siguiente enlace: [VER DEMO](http://esquina-caliente.herokuapp.com) 
   
   * Recuerda que debes esperar un poco para visualizar el sistema.
   * El backend también esta alojada en Heroku gratuito y es compartido con otros sistemas. [Backend](https://github.com/fcontreras2/shopping-cart-data)
   


### Tecnologías


A continuación se muestras las tecnologías utilizadas:


 - [create-react-app](https://github.com/facebook/create-react-app): Base del proyecto
 - [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom): Manejo de rutas.
 - [react-redux](https://github.com/reduxjs/react-redux): Implementacion de redux en React.
 - [react-jss](https://github.com/cssinjs/react-jss): Css en JavaScript.
 - [redux-thunk](https://github.com/reduxjs/redux-thunk): Permite realizar dispatch de manera asíncrona.
 
Otros:
 - [normalizr](https://github.com/paularmstrong/normalizr): Normalizacion de datos.
 - [react-bootstrap](https://react-bootstrap.netlify.com/): Componentes de Bootstrap para un maquetado más rápido. 
 - [sass](http://sass-lang.com/): Edicion de componentes por defecto de bootstrap.
 - [redux-form](https://redux-form.com/7.4.2/): Manejo de formularios utilizando Redux.
 - [json-server](https://github.com/typicode/json-server): Backend - Servidor de prueba.
 


### Store (Redux)
  El store cuenta con 3 reducers principales, donde cada una tiene una funcionalidad:


  - menu: Manejo de las comidas a ofrecer al cliente, carga de items al pedidos y confirmación del pedido.
  - orders: Manejos de los pedidos pendientes y en historial.
  - modal: Permite gestionar lainformaciónn a mostrar en el modal deconfirmaciónn yvisualizaciónn de los pedidos.
