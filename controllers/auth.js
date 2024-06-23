const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');


const createUser = async (req, res = response) => {

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msj: 'Ya existe un Usuario con este email'
            });
        }

        user = new User(req.body);

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        res.status(201).json({
            ok: true,
            msj: 'Usuario registrado exitosamente',
            uid: user.id,
            name
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