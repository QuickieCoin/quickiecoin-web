import express from 'express'
import Airtable from 'airtable'

const handler = express()

handler.all('/locations', (req, res) => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base('appPru6lIm9uZDdiy')
  base('Locations').select({
    view: 'Grid view'
  }).firstPage(function (err, records) {
    if (err) { console.error(err); return }
    records.forEach(function (record) {
      res.send(records.map(atm => atm.fields))
    })
  })
})

module.exports = {
  path: '/api/',
  handler
}
