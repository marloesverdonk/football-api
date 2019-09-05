const { Router } = require('express')
const Team = require('./model')

const teamRouter = new Router()
teamRouter.get(
  '/team',
  (request, response, next) => {
    Team.findAll()
    .then((listOfTeams) => response.send(listOfTeams))
    .catch(next)
  }
)

teamRouter.post('/team', (request, response, next) => {
  Team.create(request.body)
  .then((newlyCreatedTeam) => response.send(newlyCreatedTeam))
  .catch(next)
})

teamRouter.get(
  '/team/:id',
  (request, response, next) => {
    Team.findByPk(request.params.id)
    .then((teamInstance) => response.send(teamInstance))
    .catch(next)
  }
)

module.exports = teamRouter
