'use strict'

const Sequelize = require('sequelize')
const sequelizeDb = require('./index')

module.exports = sequelizeDb.define('FormEntries', {
  id: {
    primaryKey: true,
    type: Sequelize.STRING
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  nationalId: Sequelize.STRING,
  phoneNumber: Sequelize.STRING,
  email: Sequelize.STRING,

  isUtStudent: Sequelize.BOOLEAN,
  bachelorsId: Sequelize.STRING,
  bachelorsClass: Sequelize.STRING,
  masterId: Sequelize.STRING,
  masterClass: Sequelize.STRING,
  masterInfo: Sequelize.STRING,
  phdId: Sequelize.STRING,
  phdClass: Sequelize.STRING,
  phdInfo: Sequelize.STRING,
  otherUnivInfo: Sequelize.STRING,

  areasOfInterest: Sequelize.STRING,
  areasOfInterestMoreInfo: Sequelize.STRING,

  isWeekly: Sequelize.BOOLEAN,
  weeklyHours: Sequelize.STRING,
  isWorkshop: Sequelize.BOOLEAN,
  workshopDuration: Sequelize.INTEGER,

  hasExperience: Sequelize.BOOLEAN,
  experienceDetail: Sequelize.STRING,
  resumeFilename: Sequelize.STRING,
})