# Aplicación de Películas - SPA (React)

## Descripción

Aplicación web desarrollada con React que permite:

- Ver una lista de películas populares
- Consultar el detalle de cada película
- Buscar películas por título

La navegación se realiza en el cliente mediante React Router.

## Tecnologías utilizadas

- React
- React Router DOM
- JavaScript
- CSS

## Estructura del proyecto

src/
  components/
  pages/
    Home.js
    Movie.js
    Search.js
  services/
    api.js
  App.js
  index.js
  index.css

## Instalación

1. Clonar el repositorio

2. Acceder a la carpeta del proyecto

3. Instalar dependencias

npm install

## Ejecución

npm start

La aplicación estará disponible en:

http://localhost:3000

(si el puerto está ocupado, se abrirá en otro)

## Funcionalidades

- Página de inicio (/): muestra películas populares
- Página de detalle (/movie/:id): muestra información de la película
- Página de búsqueda (/search): permite buscar películas

## API utilizada

The Movie Database (TMDB)

Es necesario configurar una API Key en:

src/services/api.js