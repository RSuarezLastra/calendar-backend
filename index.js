
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const { PORT } = process.env;


//*? crear servidor de express

const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio Público
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));



//Escuchar peticiones
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});