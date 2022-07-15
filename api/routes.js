const getPosts = require('../controllers/posts');
const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');
const getUsers = require('../controllers/getUsers');
const getUsersById = require('../controllers/getUsersById');

module.exports = {
  getPosts,
  createUsers,
  getUsers,
  login,
  getUsersById,
};
