const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidator} = require('../middlewares/field-validator');

const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');

//* Users Routes -  auth
// host + /api/auth

router.post('/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener al menos 8 caracteres').isLength({ min: 8 }),
        fieldValidator
    ],
    loginUser
);
router.post('/register',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener al menos 8 caracteres').isLength({ min: 8 }),
        fieldValidator
    ],
    createUser
);
router.get('/renew', renewToken);



module.exports = router;