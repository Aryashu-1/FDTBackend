
const event = require("../models/event");



async function createEvent(req,res){

    try {
        
        const new_event = await event.create({
            name: req.body.name,
            type: req.body.type,
            mode: req.body.mode,
            domain: req.body.domain,
            venue: req.body.venue,
            startDate: new Date(req.body.startDate),
            endDate: new Date(req.body.endDate),       
        })

        new_event.populate('domain');

        return res.status(201).send(new_event)


    } catch (error) {
        return res.status(400).send(null)
    }
}

async function getEvents(req,res){
    try {

        const filters = req.params;
        const new_events = await event.find(filters).populate('venue').populate('domain')

        return res.status(200).send(new_events)

    } catch (error) {
        return res.status(400).send(null)
    }
}

module.exports = {
    createEvent,
    getEvents
}