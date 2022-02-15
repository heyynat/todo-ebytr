const { StatusCodes } = require('http-status-codes');
const Services = require('../services');

module.exports = async (req, res) => {
  try {
    const task = await Services.findAll();
    if (!task) return res.status(StatusCodes.NOT_FOUND).end(); 
    return res.status(StatusCodes.OK).json(task);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Erro ao salvar o usuário no banco' });
  }
};
