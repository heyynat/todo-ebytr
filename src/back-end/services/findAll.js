const Model = require('../models');

module.exports = async () => {
  try {
    const tasks = await Model.findAll();
    if (!tasks) return null;
    return tasks;
  } catch (error) {
    return error;
  }
};
