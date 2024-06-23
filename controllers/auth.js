const { response } = require('express');
const User = require('../models/User');


const createUser = async (req, res = response) => {

    // const { name, email, password } = req.body;
    try {
        const user = new User(req.body);

        await user.save();

        res.status(201).json({
            ok: true,
            msj: 'Usuario registrado',
        });

    } catch (error) {
        console.log(error);
        res.status(500).json('Error al crear usuario');
    }
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