const express = require('express')

import {
  getAllBulletinsDB,
  getBulletinByIdDB,
  delBulletinDB,
} from '../db/dbBulletin'

export const router = express.Router()

router.get('/', (req, res) => {
  getAllBulletinsDB()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => console.log(err.message))
})

router.get('/:id', (req, res) => {
  getBulletinByIdDB(id).then((data) => {
    res.json(data)
  })
  res.status(500).send(err.message)
})

router.delete('/:id', (req, res) => {
  getBulletinByIdDB(id).then(() => {
    res.sendStatus(200)
  })
  res.status(500).send(err.message)
})
