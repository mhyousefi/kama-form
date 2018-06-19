const sequelizeDb = require('../models/index')

const createDatabaseTable = async () => {
  await sequelizeDb.sync().then(() => {
    console.log('Database table is created successfully.')
  })
}

module.exports.createDatabaseTable = createDatabaseTable