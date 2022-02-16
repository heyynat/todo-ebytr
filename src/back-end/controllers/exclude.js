const { StatusCodes } = require('http-status-codes');
const Services = require('../services');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const taskExcluded = await Services.exclude(id);
    if (!taskExcluded) return res.status(StatusCodes.NOT_FOUND).end(); 
    return res.status(StatusCodes.OK).end();
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Erro ao salvar o usuário no banco' });
  }
};
