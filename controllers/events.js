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

const updateEvent = async (req, res = response) => {

    const eventId = req.params.id;

    try {

        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                ok: false,
                msj: 'No existe un evento con ese id'
            })
        }

        if (event.user.toString() !== req.uid) {
            return res.status(401).json({
                ok: false,
                msj: 'No tiene privilegio de editar este evento'
            })
        }

        const newEvent = {
            ...req.body,
            user: req.uid
        }

        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, { new: true });

        res.status(200).json({
            ok: true,
            msj: 'Evento actualizado',
            updatedEvent
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: true,
            msj: 'Error al actualizar evento',
        });
    }
}

const deleteEvent = async (req, res = response) => {

    const eventId = req.params.id;

    try {

        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                ok: false,
                msj: 'No existe un evento con ese id'
            })
        }

        if (event.user.toString() !== req.uid) {
            return res.status(401).json({
                ok: false,
                msj: 'No tiene privilegio de eliminar este evento'
            })
        }

        await Event.findByIdAndDelete(eventId);

        res.status(200).json({
            ok: true,
            msj: 'Evento eliminado'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: true,
            msj: 'Error al eliminar evento',
        });
    }
}


module.exports = {
    getAllEvents,
    createEvent,
    updateEvent,
    deleteEvent
}