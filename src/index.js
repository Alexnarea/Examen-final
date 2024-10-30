import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './router/index.js'; // Importa el router
import { Conectar } from './services/conexion.js';

const app = express();

// Configurar EJS como el controlador de vistas
app.set('view engine', 'ejs');

// Ruta para la página principal
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', join(__dirname, 'views'));

app.use('/', indexRouter); // Usa el router para las rutas

app.use(express.static(join(__dirname, 'public'))); // Ruta estática para archivos CSS


Conectar()
// Inicializa el servidor
app.listen(3000);
console.log("El servidor está siendo escuchado en el puerto: ", 3000);
