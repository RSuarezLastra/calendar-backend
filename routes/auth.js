const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {

    res.json({
        ok: true,
        logged: false
    })
});



module.exports = router;