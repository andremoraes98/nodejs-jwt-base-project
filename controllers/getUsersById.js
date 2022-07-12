const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const { userId } = req.params;
    const { authorization } = req.headers;
    const users = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (!authorization) {
      return res.status(400).json({ message: 'Token não encontrado ou informado' });
    } 
    if (!users) throw Error;

    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar usuários no banco', error: err.message });
  }
};
