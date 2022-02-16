const Model = require('../models');

module.exports = async (id, status) => {
  try {
    const taskUpdated = await Model.update(id, status);
    return taskUpdated;
  } catch (error) {
    return error;
  }
};
