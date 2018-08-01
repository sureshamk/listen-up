const NeDB = require('nedb');
const path = require('path');

module.exports = function (app) {
  const dbPath = app.get('nedb');
  const Model = new NeDB({
    filename: path.join(dbPath, 'webhooks.db'),
    timestampData: true,
    autoload: true
  });

  Model.ensureIndex({ fieldName: 'createdAt', expireAfterSeconds: 28800 });

  return Model;
};
