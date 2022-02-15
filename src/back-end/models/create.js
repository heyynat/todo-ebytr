const connection = require('./connection');

module.exports = async (taskName) => {
  const infoTask = { createAt: new Date(), status: 'Pendente' }
  const { insertedId: _id }  = await (await connection())
  .collection('todo').insertOne({ taskName,  ...infoTask })
  return { _id, taskName, ...infoTask };
};
