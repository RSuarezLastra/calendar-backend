
const express = require('express');

//*? crear servidor de express

const app = express();


//Rutas
app.get('/', (req, res) => {
    
    res.json({
        ok: true
    })
})


//Escuchar peticiones
app.listen(3001, () => {
    console.log('servidor corriendo en el puerto 3001');
});