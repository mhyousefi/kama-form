import { deleteFormEntry } from '../domain/formEntryRepo'

const sequelizeDb = require('../models/index')

const createDatabaseTable = async () => {
  await sequelizeDb.sync().then(() => {
    console.log('Database table is created successfully.')
  })
}

const deleteSomeFormEntries = async () => {
  ['2', '3', '8', '9', '14', '15'].forEach((id) => {
    deleteFormEntry(id)
  })
}

module.exports.createDatabaseTable = createDatabaseTable
module.exports.deleteSomeFormEntries = deleteSomeFormEntries