const { Router } = require('express');
const { check } = require('express-validator');
const { validateJwt } = require('../middlewares/jwt-validate');
const { getAllEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = Router();

//*   EVENT ROUTES
//? route =  api/events

router.use(validateJwt);

router.get('/',getAllEvents);
router.post('/',createEvent);
router.put('/:id',updateEvent);
router.delete('/:id',deleteEvent);


module.exports = router
