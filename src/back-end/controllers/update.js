const { StatusCodes } = require('http-status-codes');
const Services = require('../services');

module.exports = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    const taskUpdated = await Services.update(id, status);
    if (!taskUpdated) return res.status(StatusCodes.NOT_FOUND).end(); 
    return res.status(StatusCodes.OK).end();
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Erro ao salvar o usuário no banco' });
  }
};
