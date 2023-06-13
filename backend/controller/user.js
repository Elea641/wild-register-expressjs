const express = require('express');
const userModel = require('../model/user');
const hashPassword = require('../middleware/auth.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const response = await userModel.getUser()
      res.send(response);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving users');
    }
});

router.post('/create', hashPassword, async (req, res) => {
  const user = req.body;
  try {
      const response = await userModel.createUser(user);
      if(response){
          res.status(200).json(response);
      } else {
          res.status(404).send('User not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Error inserting user');
  }
});

module.exports = router;