const express = require('express');
const app = express();

/* importo las rutas*/
const mainRoutes = require('./src/routes/mainRoutes.js')
const PORT = 3000;
app.use(express.static('public'));

/* uso los archivos de las rutas */
app.use('/', mainRoutes);
// Middleware para manejar el error 404
app.use((req, res, next) => {
res.status(404).send('Recurso no encontrado');
});
app.listen(PORT, () => console.log(`Servidor corriendo en
http://localhost:${PORT}`));

require('dotenv').config();
/* Leemos la constante*/
const PORT = process.env.PORT;