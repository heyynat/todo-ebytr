const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id, status) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const taskUpdated = await (await connection())
  .collection('todo').findOneAndUpdate({ _id: ObjectId(id) }, { $set: { status } });
  return taskUpdated;
};
