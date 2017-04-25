'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const Users = require('../models/users');

router.route('/users')
  .get((req, res, next) => {
    Users.fetchAll({ withRelated: ['teams', 'images', 'exercises'] })
    .then((usersList) => {
      console.log(JSON.stringify(usersList));
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(usersList));
    })
    .catch((err) => next(err));
  });

  // .post('/users', (req, res, next) => {
  //   // write code in here
  //   let magic = 'happen';
  // });

module.exports = router;
