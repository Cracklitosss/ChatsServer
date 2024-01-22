require('dotenv').config();
console.log('DB_CONNECTION_STRING:', process.env.DB_CONNECTION_STRING);
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();

// Conexión a MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Rutas de Usuarios
app.use('/api', userRoutes);

// Rutas de Mensajes
app.use('/api', messageRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
