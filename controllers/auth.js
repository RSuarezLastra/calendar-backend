const { response } = require('express');

const createUser = (req, res = response) => {

    const { name, email, password } = req.body;

    if(!name || name.length < 2) return res.status(400).json({
        ok: false,
        msj: 'El nombre es requerido'
    })

    res.status(201).json({
        ok: true,
        msj: 'Usuario registrado',
        name,
        email,
        password,
    });
}
const loginUser = (req, res = response) => {

    const { email, password } = req.body;

    res.json({
        ok: true,
        ms: 'usuario loggeado correctamente',
        email,
        password,
    });
}
const renewToken = (req, res = response) => {

    res.json({
        ok: true,
        msj: 'token renovado'
    });
}

module.exports = {
    createUser,
    loginUser,
    renewToken,
}