const { StatusCodes } = require('http-status-codes');
const Services = require('../services');

module.exports = async (req, res) => {
  try {
    const { taskName } = req.body;
    const taskCreated = await Services.create(taskName);

    return res.status(StatusCodes.CREATED).json(taskCreated);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Erro ao salvar o usuário no banco' });
  }
};
