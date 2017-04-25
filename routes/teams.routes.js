
// import node module
import express from 'express';
import knex from '../knex';
// const boom = require('boom');

const router = express.Router();

// GET route to teams API to retrieve list of teams
router.get('/teams', (_req, res, next) => {
  knex('teams')
    .orderBy('name')
    .then((teams) => {
      res.send(teams);
    })
    .catch((err) => {
      next(err);
    });
});

export default router;

// POST route to teams API - to create a new teams


// UPDATE route to teams API to edit a pre-existing teams
