# Esquina Caliente

## Preámbulo

Nos acaban de enviar un correo con una solicitud para un nuevo proyecto. Hay un
restautante que nos ha contactado porque quieren que alguien les construya una
interfaz donde puedan tomar pedidos usando una tablet.

Como punto de partida,
nos comparten el siguiente correo recibido del cliente:

> Somos **Esquina Caliente**, una cadena de comida rápida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida, y para
> expandirnos necesitamos un sistema que nos ayude a tomar los pedidos de los
> clientes.
>
> Tenemos 1 menú bien sencillo:
>
> | Item                      |Precio|
> |---------------------------|------|
> | Cafe americano            |    5 |
> | Cafe con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo natural              |    7 |

## Introducción

Partiendo de los requerimientos de negocio detallados en el correo del cliente,
nos piden construir **una interfaz que permita a los cajeros tomar los pedidos
en una tablet, y desde ahí se puedan enviar a cocina** a través de un backend del
que nos darán detalles más adelante.

El primer paso de este proyecto debe ser convertir el menú descrito por el
cliente en una estructura que podamos poner en un archivo JSON para después
_pintar_ en la pantalla.

Nuestra interfaz debe mostrar el menú, cada uno. El usuario debe poder ir eligiendo que _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el total.

## Objetivos

El objetivo principal de este proyecto es construir una
_interfaz web_ usando el _framework_ elegido (React, Vue o Angular). Todos estos
frameworks de front-end atacan el mismo problema: **cómo mantener la interfaz y
el estado sincronizados**. Así que esta experiencia espera familiarizarse con
el concepto de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_
a un _pedido_, la interfaz debe actualizar la lista del pedido y el total).

Finalmente, la interfaz debe estar diseñada específicamente para correr en
**tablets**.

Tópicos: _react_, _redux_, _angular_, _vue_, _pwa_

## Consideraciones generales

**No es INDISPENSABLE completar la totalidad del proyecto. Si por alguna razón
no pudiste culminarlo IGUAL comunícate con nosotros para evaluar el progreso y
si por otras razones crees no poder tener el tiempo suficiente para hacerlo
(por ejemplo: tu actual trabajo te lo imposibilita) pero te crees capaz de tener
la destreza para realizarlo, IGUAL comunícate con nosotros**

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.
Debes elegir entre [React](https://reactjs.org/), [Vue](https://vuejs.org/) o
[Angular](https://angular.io/).

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive**. También necesitamos botones
grandes para escoger los productos, y el estado actual del pedido siempre
visible para poder confirmar con el cliente.

La aplicación desplegada debe tener 70% o más el las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_.

Por otro lado, la parte de la interfaz no está incluida, por lo cual, deberás de
definir la estructura de carpetas y archivos que consideres necesaria, puedes
guiarte de las convenciones del framework elegido. Por ende, los tests y el
setup necesario para ejecutarlos serán realizados por ti.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## Parte obligatoria

### Definición del producto

En el `README.md` cuéntanos qué decisiones de diseño tomaste, incluye bocetos
tipo _story board_, info de despliegue e instrucciones para developers
(dependencias, instalación, tests, ...).

### UI

#### Tomar pedidos

* Ingresar nombre del cliente.
* Filtrar _menú_ por _desayuno_ y _resto del día_.
* Agregar ítem al pedido.
* Eliminar ítem del pedido.
* Mostrar _resumen_ de pedido con todos los items y el total.
* Enviar a cocina (esto debe guardar el pedido).

#### Ver/atender pedidos

* Vista de pedidos pendientes
* Marcar pedido como listo
* Ver historial de pedidos

#### Autenticación

* Inicio de sesión

### UX

* Debe **verse bien y funcionar bien en tablets**.
* Queremos botones grandes para fácil uso en pantallas táctiles (touch screens).
* Queremos el estado actual del pedido siempre visible mientras tomamos un
  pedido.
* Queremos que sea accesible y que funcione bien en tablets.

## BACKEND

El Back-End del proyecto puede ser el de tu preferencia: **PHP, NODE, Firebase, etc**. Si crees conveniente basar toda la información a través de un JSON no hay problema, tampoco es necesario que la información se almacene permanentemente porque al final lo que más nos interesa es el aspecto Frontend.

## Entregables

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada implementando el servicio de hosting de tu preferencia.
Por último notificarnos enviando un correo con el link del repositorio al correo: **luis@kambista.com**

## Evaluación

### Tech

| Habilidad | Nivel esperado |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 4
| Nomenclatura/semántica | 3
| Funciones/modularidad | 3
| Estructuras de datos | 3
| Tests | 3
| **HTML** | |
| Validación | 3
| Estilo | 3
| Semántica | 3
| SEO | n/a
| **CSS** | |
| DRY | 3
| Responsive | 3
| **SCM** | |
| Git | 3
| GitHub | 3
| **CS** | |
| Lógica | 3
| Arquitectura | 2
| Patrones/paradigmas | n/a

### UX

| Habilidad | Nivel esperado |
|-----------|----------------|
| User Centricity | 3
| Testing | 3
| User Flow | 3
| Jerarquía | 3
| Alineación | 3
| Contraste | 3
| Color | 3
| Tipografía | 3

## Primeros pasos

1. Haz un _fork_ de este repo (en GitHub).

2. Clona tu _fork_ en tu computadora:

   ```sh
   git clone git@github.com:<tu-usuario-de-github>/kambista-esquina-caliente.git
   cd kambista-esquina-caliente
   ```

3. Crea una rama a partir de `master` para empezar a trabajar. Por ejemplo:

   ```sh
   git checkout -b develop
   ```
4. Llegado a este punto ya puedes comenzar con el _front-end_ :wink:

## Pistas / Tips

### Frameworks / libraries

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Vue](https://vuejs.org/)
* [Angular](https://angular.io/)

### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)

## Checklist

### General

* [ ] Producto final sigue los lineamientos del diseño.
* [ ] Estética y fluidez de los elementos y procesos.

### `README.md`

* [ ] Documenta proceso de diseño.
* [ ] Incluye info para developers (deps, instalación, uso, despliegue, testing,
  ...).

### Lighthouse

* [ ] 70% o más en sección _Performance_.
* [ ] 70% o más en sección _Progressive Web App_.
* [ ] 70% o más en sección _Accessibility_.
* [ ] 70% o más en sección _Best Practices_.

### Tests

* [ ] 70% o más en cobertura de _statements_.
* [ ] 70% o más en cobertura de _functions_.
* [ ] 70% o más en cobertura de _lines_.
* [ ] 70% o más en cobertura de _branches_.

### UI

#### Tomar pedidos

* [ ] Ingresar nombre del cliente.
* [ ] Desplegar _menú_.
* [ ] Agregar ítem al pedido.
* [ ] Eliminar ítem del pedido.
* [ ] Mostrar _resumen_ de pedido con todos los items y el total.
* [ ] Enviar a cocina.

### UX

* [ ] Se _ve_ bien y _funciona_ bien en tablets.
* [ ] Uso fácil en pantallas táctiles (touch screens).
* [ ] Estado actual del pedido siempre visible mientras tomamos un pedido.
