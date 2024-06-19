
const express = require('express');
require('dotenv').config();

const { PORT } = process.env;


//*? crear servidor de express

const app = express();


// Directorio Público
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'))
//TODO: CRUD: Eventos


//Escuchar peticiones
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});