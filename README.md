# Contribution Rewards Bot

Este proyecto es un bot de Discord que realiza un seguimiento del rendimiento y las contribuciones de un equipo. Los usuarios pueden ganar puntos por acciones positivas y canjearlos por recompensas exclusivas como fichas OWL y pases de batalla. Además, los usuarios pueden participar en eventos, ayudar a sus compañeros de equipo y completar tareas especiales para ganar puntos extra. El panel de reputación del bot permite a los jefes de equipo motivar y reconocer a los miembros de su equipo.

## Estructura del proyecto

```
contribution-rewards-bot
├── src
│   ├── commands
│   │   ├── ayuda.js
│   │   ├── canjear.js
│   │   ├── eventos.js
│   │   ├── puntos.js
│   │   ├── recompensas.js
│   │   └── top.js
│   ├── events
│   │   └── message.js
│   └── utils
│       └── database.js
├── package.json
├── config.json
└── README.md
```

## Comandos

- `ayuda.js`: Este archivo exporta una función `ayudaCommand` que proporciona información sobre cómo utilizar los comandos del bot y detalles del sistema de recompensas.
- `canjear.js`: Este archivo exporta una función `canjearComando` que permite a los usuarios canjear puntos por una recompensa especificada.
- `eventos.js`: Este archivo exporta una función `eventosCommand` que lista los próximos eventos y las recompensas asociadas a ellos.
- `puntos.js`: Este fichero exporta una función `puntosComando` que muestra los puntos actuales del usuario que ejecuta el comando.
- `recompensas.js`: Este archivo exporta una función `recompensasCommand` que enumera todas las recompensas disponibles y los puntos necesarios para canjearlas.
- `top.js`: Este archivo exporta una función `recompensasCommand` que enumera todas las recompensas disponibles y los puntos necesarios para canjearlas.

## Eventos

- `message.js`: Este archivo exporta una función manejadora de eventos `messageEvent` que maneja los mensajes entrantes y dispara los comandos apropiados.

## Servicios

- `database.js`: Este archivo exporta una función de utilidad `databaseUtils` que maneja las operaciones de la base de datos para almacenar y recuperar los puntos y recompensas de los usuarios.

## Configuracion

- `package.json`: Este archivo es el archivo de configuración para npm. Enumera las dependencias y scripts para el proyecto.
- `config.json`: Este archivo contiene los ajustes de configuración del bot, como el token de Discord y otros ajustes específicos del bot.


Este archivo README sirve como documentación del proyecto.