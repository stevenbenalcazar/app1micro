const express = require('express');
const app = express();
const path = require('path');

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Importar los microservicios
const service1Router = require('./services/service1');
const service2Router = require('./services/service2');
const service3Router = require('./services/service3');

// Endpoints para cada servicio
app.use('/service1', service1Router);
app.use('/service2', service2Router);
app.use('/service3', service3Router);

// Configurar puerto
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
