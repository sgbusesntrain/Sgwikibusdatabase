const express = require('express')
const router = new express.Router()
const coreUpdate = require('../../load-data/load-all')
const routePathUpdate = require('../../load-data/bus/load-route-paths')

router.get('/trigger-core-update', async (req, res) => {
  try {
    await coreUpdate()
    res.json({
      status: 'ok'
    })
  } catch (e) {
    res.json({
      status: 'error',
      message: e.toString()
    })
  }
})

router.get('/trigger-route-path-update', async (req, res) => {
  try {
    await routePathUpdate()
    res.json({
      status: 'ok'
    })
  } catch (e) {
    res.json({
      status: 'error',
      message: e.toString()
    })
  }
})

module.exports = router