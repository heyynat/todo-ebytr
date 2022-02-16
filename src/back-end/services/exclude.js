const Model = require('../models');

module.exports = async (id) => {
  try {
    const taskExcluded = await Model.exclude(id);
    return taskExcluded;
  } catch (error) {
    return error;
  }
};
