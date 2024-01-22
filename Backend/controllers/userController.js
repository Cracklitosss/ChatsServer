const User = require('../models/user');

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    
    const newUser = new User({
      username,
      password,
      email,
      // Otros campos relevantes
    });

    const usuarioGuardado = await newUser.save();
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error interno al crear el usuario' });
  }
};

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener todos los usuarios' });
  }
};

// Obtener usuario por ID
const getUserById = async (req, res) => {
  try {
    const usuario = await User.findById(req.params.id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario por ID' });
  }
};

// Borrar usuario por ID
const deleteUserById = async (req, res) => {
  try {
    const usuarioEliminado = await User.findByIdAndDelete(req.params.id);
    if (usuarioEliminado) {
      res.json({ mensaje: 'Usuario eliminado con éxito' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario por ID' });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
};
