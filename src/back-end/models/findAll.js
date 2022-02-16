const connection = require('./connection');

module.exports = async () => {
  const tasks = await (await connection())
  .collection('todo').find().toArray();
  if (!tasks) return null;
  return tasks;
};
