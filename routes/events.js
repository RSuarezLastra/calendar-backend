const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidator } = require('../middlewares/field-validator');
const { validateJwt } = require('../middlewares/jwt-validate');
const  {isDate} = require('../helpers/isDate');
const { getAllEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = Router();

//*   EVENT ROUTES
//? route =  api/events

router.use(validateJwt);

router.get('/',getAllEvents);
router.post('/',
    [
        check('title', 'El titulo es obligatorio').notEmpty(),
        check('start', 'La fecha de inicio es requerida').custom(isDate),
        check('end', 'La fecha de finalización es requerida').custom(isDate),
        fieldValidator
    ],
    createEvent
);
router.put('/:id',updateEvent);
router.delete('/:id',deleteEvent);


module.exports = router
