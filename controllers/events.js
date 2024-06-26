const { response } = require('express');


const getAllEvents = (req, res = response) => {

    res.status(200).json({
        ok: true,
        msj: 'Todos los eventos'
    });
}
const createEvent = (req, res = response) => {

    res.status(200).json({
        ok: true,
        msj: 'Evento creado'
    });
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