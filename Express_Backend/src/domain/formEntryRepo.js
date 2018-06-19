'use strict'

const FormEntries = require('../models/formEntry')

const addFormEntry = async (newFormEntry, errCallback) => {
  try {
    await FormEntries.create({
      id: newFormEntry.id,
      firstName: newFormEntry.firstName,
      lastName: newFormEntry.lastName,
      nationalId: newFormEntry.nationalId,
      phoneNumber: newFormEntry.phoneNumber,
      email: newFormEntry.email,

      isUtStudent: newFormEntry.isUtStudent,
      bachelorsId: newFormEntry.bachelorsId,
      bachelorsClass: newFormEntry.bachelorsClass,
      masterId: newFormEntry.masterId,
      masterClass: newFormEntry.masterClass,
      masterInfo: newFormEntry.masterInfo,
      phdId: newFormEntry.phdId,
      phdClass: newFormEntry.phdClass,
      phdInfo: newFormEntry.phdInfo,
      otherUnivInfo: newFormEntry.otherUnivInfo,

      areasOfInterest: newFormEntry.areasOfInterest,
      areasOfInterestMoreInfo: newFormEntry.areasOfInterestMoreInfo,

      isWeekly: newFormEntry.isWeekly,
      weeklyHours: newFormEntry.weeklyHours,
      isWorkshop: newFormEntry.isWorkshop,
      workshopDuration: newFormEntry.workshopDuration,
      resumeFilename: newFormEntry.resumeFilename,
    }).then(home => {
      if (!home) errCallback(new Error('Could not add home'))
      else return home
    })
  } catch (err) {
    errCallback(new Error(err.message))
  }
}

const getFormEntryByID = async (id, errCallback) => {
  return await FormEntries.findById(id).then(item => {
    if (!item) errCallback(new Error('User was not found'))
    else {
      let retouchedItem = item
      retouchedItem.areasOfInterest = JSON.parse(retouchedItem.areasOfInterest)
      retouchedItem.weeklyHours = JSON.parse(retouchedItem.weeklyHours)
      return retouchedItem
    }
  })
}

const getEntryCount = async (errCallback) => {
  try {
    return await FormEntries.findAndCountAll({where: {}}).then(results => {
      if (!results) errCallback(new Error('Unable to search for homes'))
      else return results.count
    })
  } catch (err) {
    errCallback(new Error(err.message))
  }
}

const deleteFormEntry = async (id, errCAllback) => {
  try {
    return await FormEntries.create({ id: id }).then(entry => {
      return entry.destroy({ force: true });
    }).then(() => {
      console.log(`Deleted form entry with id ${id}`)
    })
  } catch (err) {
    errCallback(new Error(err.message))
  }
}

const getAllEntries = async (errCallback) => {
  try {
    return await FormEntries.findAndCountAll({where: {}}).then(results => {
      if (!results) errCallback(new Error('Unable to search for homes'))
      else {
        const entries = results['rows']
        let retouchedEntries = []
        entries.forEach((item) => {
          item.areasOfInterest = JSON.parse(item.areasOfInterest)
          item.weeklyHours = JSON.parse(item.weeklyHours)
          retouchedEntries.push(item)
        })
        return retouchedEntries
      }
    })
  } catch (err) {
    errCallback(new Error(err.message))
  }
}

module.exports.addFormEntry = addFormEntry
module.exports.getFormEntryByID = getFormEntryByID
module.exports.getEntryCount = getEntryCount
module.exports.getAllEntries = getAllEntries
module.exports.deleteFormEntry = deleteFormEntry