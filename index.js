
const express = require('express');
require('dotenv').config();

const { PORT } = process.env;


//*? crear servidor de express

const app = express();


// Directorio Público
app.use(express.static('public'));

//Rutas
// app.get('/', (req, res) => {

//     res.json({
//         ok: true
//     })
// })


//Escuchar peticiones
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});