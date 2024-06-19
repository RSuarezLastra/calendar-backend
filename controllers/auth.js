const { response } = require('express');

const createUser = (req, res = response) => {

    res.json({
        ok: true,
        ms: 'Usuario registrado'
    });
}
const loginUser = (req, res = response) => {

    res.json({
        ok: true,
        ms: 'login'
    });
}
const renewToken = (req, res = response) => {

    res.json({
        ok: true,
        ms: 'token renovado'
    });
}

module.exports = {
    createUser,
    loginUser,
    renewToken,
}