const { Router } = require('express');
const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');

//* Users Routes -  auth
// host + /api/auth

router.post('/', loginUser);
router.post('/register', createUser);
router.get('/renew', renewToken);



module.exports = router;