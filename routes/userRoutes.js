const express = require('express');
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const router = express.Router();

//como en la app ya especifiqué la URL, no es necesario ponerle otra vez el /post, porque quedaría .../posts/posts, entonces lo borro y queda : /
router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:id', getUserById); //con esta ruta dinámica (/...) especifico que ahí pued ir cualquier valor (en este caso, Id)

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = { usersRouter: router };
