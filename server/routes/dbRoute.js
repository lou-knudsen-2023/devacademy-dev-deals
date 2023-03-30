const express = require('express')

// import functions from DB file

export const router = express.Router()

router.get('/',  (req, res) => {
  //function()
  .then((data) => {
    res.json(data)
  })
  .catch((err) => console.log(err.message))
})