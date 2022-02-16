const Model = require('../models');

module.exports = async (taskName) => {
  try {
    const taskCreated = await Model.create(taskName);
    return taskCreated;
  } catch (error) {
    return error;
  }
};
