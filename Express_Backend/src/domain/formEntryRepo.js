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

      areasOfInterest: newFormEntry.areasOfInterest,
      areasOfInterestMoreInfo: newFormEntry.areasOfInterestMoreInfo,

      isWeekly: newFormEntry.isWeekly,
      weeklyHours: newFormEntry.weeklyHours,
      isWorkshop: newFormEntry.isWorkshop,
      workshopDuration: newFormEntry.workshopDuration,
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

module.exports.addFormEntry = addFormEntry
module.exports.getFormEntryByID = getFormEntryByID