const { response } = require('express');
const Event = require('../models/Event');


const getAllEvents = async (req, res = response) => {

    const events = await Event.find()
        .populate('user', 'name')

    res.status(200).json({
        ok: true,
        msj: 'Todos los eventos',
        events
    });
}
const createEvent = async (req, res = response) => {

    const { title, notes, start, end } = req.body;

    const event = new Event({ title, notes, start, end });

    try {

        event.user = req.uid;

        const savedEvent = await event.save();

        res.status(201).json({
            ok: true,
            msj: 'Evento creado exitosamente',
            event: savedEvent
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msj: 'Error al crear evento'
        })
    }
}

const updateEvent = (req, res = response) => {

    res.status(200).json({
        ok: true,
        msj: 'Evento actualizado'
    });
}
const deleteEvent = (req, res = response) => {

    res.status(200).json({
        ok: true,
        msj: 'Evento eliminado'
    });
}


module.exports = {
    getAllEvents,
    createEvent,
    updateEvent,
    deleteEvent
}