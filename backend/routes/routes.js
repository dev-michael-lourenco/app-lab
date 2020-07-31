const express=require('express')


const DealershipController = require('../controllers/DealershipController')
const FeedController = require('../controllers/FeedController')
const IncidentController = require('../controllers/IncidentController')
const OngController = require('../controllers/OngController')
const ProfileController = require('../controllers/ProfileController')
const SessionController = require('../controllers/SessionController')
const UserController = require('../controllers/UserController')

const routes = express.Router()

routes.post('/sessions',SessionController.create)


routes.get("/dealerships", DealershipController.index)
routes.post("/dealerships", DealershipController.create)
routes.delete("/dealerships/:id", DealershipController.delete)

routes.get("/ongs", OngController.index)
routes.post("/ongs", OngController.create)


routes.get("/profile", ProfileController.index)
routes.get("/ong_incidents", ProfileController.ong_incidents)

routes.get("/incidents", IncidentController.index)
routes.post("/incidents", IncidentController.create)
routes.delete("/incidents/:id", IncidentController.delete)


routes.get("/users", UserController.index)
routes.post("/users", UserController.create)

routes.get("/feed", FeedController.index)


module.exports = routes;

