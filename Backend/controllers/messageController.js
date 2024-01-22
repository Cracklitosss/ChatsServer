const Message = require('../models/message');

// Crear un nuevo mensaje
const createMessage = async (req, res) => {
  try {
    const { senderId, receiverId, text } = req.body;

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
    });

    const mensajeGuardado = await newMessage.save();
    res.status(201).json(mensajeGuardado);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el mensaje' });
  }
};

// Obtener todos los mensajes
const getAllMessages = async (req, res) => {
  try {
    const mensajes = await Message.find();
    res.json(mensajes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener todos los mensajes' });
  }
};

// Obtener mensaje por ID
const getMessageById = async (req, res) => {
  try {
    const mensaje = await Message.findById(req.params.id);
    if (mensaje) {
      res.json(mensaje);
    } else {
      res.status(404).json({ error: 'Mensaje no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el mensaje por ID' });
  }
};

// Borrar mensaje por ID
const deleteMessageById = async (req, res) => {
  try {
    const mensajeEliminado = await Message.findByIdAndDelete(req.params.id);
    if (mensajeEliminado) {
      res.json({ mensaje: 'Mensaje eliminado con éxito' });
    } else {
      res.status(404).json({ error: 'Mensaje no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el mensaje por ID' });
  }
};

module.exports = {
  createMessage,
  getAllMessages,
  getMessageById,
  deleteMessageById,
};
