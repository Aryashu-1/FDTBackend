
const venue = require("../models/venue");

async function createVenue(req,res){

    try {
        
        const new_venue = await venue.create({
            name : req.body.name
        })
        return res.status(201).send(new_venue)
    } catch (error) {
        return res.status(400).send(null)        
    }

}

async function getAllVenues(req,res){
    try {
        
        const all_venues = await venue.find({})
        return res.status(200).send(all_venues)


    } catch (error) {
        return res.status(400).send(null)                
    }


}

module.exports = {
    getAllVenues,
    createVenue
}