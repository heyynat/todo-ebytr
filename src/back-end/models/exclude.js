const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const taskExcluded = await (await connection())
  .collection('todo').findOneAndDelete({ _id: ObjectId(id) });
  return taskExcluded;
};
