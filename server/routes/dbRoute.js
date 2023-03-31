const express = require('express')
const router = express.Router()

import {
  getAllBulletinsDB,
  getBulletinByIdDB,
  delBulletinDB,
  updateBulletinDB,
  addBulletinDB,
} from '../db/dbBulletin'

// export const router = express.Router()

router.get('/', (req, res) => {
  getAllBulletinsDB()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => console.log(err.message))
})

router.get('/:id', (req, res) => {
  getBulletinByIdDB(+req.params.id)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const data = {
    title: req.body.title,
    date: req.body.date,
    description: req.body.description,
    phone: req.body.phone,
    image: req.body.image,
  }

  addBulletinDB(data)
    .then((datas) => {
      res.json(datas)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  delBulletinDB(+req.params.id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const data = {
    title: req.body.title,
    date: req.body.date,
    description: req.body.description,
    phone: req.body.phone,
    image: req.body.image,
  }
  const id = Number(req.params.id)
  console.log(data, id)

  updateBulletinDB(id, data)
    .then((bulletin) => {
      // console.log(post)
      // res.json(post)
      const first = bulletin[0]
      res.json(first)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
