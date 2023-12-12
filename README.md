# Aplicación de Servicio de Compras Online

Bienvenido/a a nuestra aplicación de servicio de compras de productos online. Esta aplicación ha sido desarrollada utilizando tecnologías como JavaScript, Vue.js, HTML, CSS en el lado del cliente, y Python con Flask y Flask-SQLAlchemy en el lado del servidor.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes elementos:

- Node.js: [Descargar Node.js](https://nodejs.org/)
- Python: [Descargar Python](https://www.python.org/)
- Flask: Puedes instalarlo con el siguiente comando: `pip install flask`
- Dependencias de Python: Ejecuta `pip install -r requirements.txt` en la carpeta del proyecto.

## Configuración del Entorno Frontend

1. Navega a la carpeta `frontend` en la terminal.
2. Instala las dependencias con el comando: `npm install`.
3. Inicia la aplicación con: `npm run serve`.

La aplicación estará disponible en [http://localhost:8080](http://localhost:8080).

## Configuración del Entorno Backend

1. Asegúrate de estar en la raíz del proyecto en la terminal.
2. Ejecuta el siguiente comando para inicializar la base de datos y migraciones:
    ```bash
    flask db init
    flask db migrate
    flask db upgrade
    ```
3. Inicia el servidor Flask con: `flask run`.

El backend estará disponible en [http://localhost:5000](http://localhost:5000).

## Estructura del Proyecto

- `frontend/`: Contiene el código fuente del frontend.
- `backend/`: Contiene el código fuente del backend.

## Tecnologías Utilizadas

- **Frontend:**
  - Vue.js
  - JavaScript
  - HTML
  - CSS

- **Backend:**
  - Flask (Python)
  - Flask-SQLAlchemy
  - SQLite (u otro motor de base de datos SQL)

## Contribución

Si deseas contribuir al desarrollo de esta aplicación, por favor sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añade nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Crea un nuevo Pull Request.

¡Gracias por contribuir!

## Problemas Comunes

Si encuentras algún problema, por favor crea un issue en este repositorio y lo revisaremos tan pronto como sea posible.
