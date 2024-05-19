const { get } = require("express/lib/response");
const domain = require("../models/domain");

async function createDomain(req,res){

    try {
        
        const new_domain = await domain.create({
            name : req.body.name
        })
        return res.status(201).send(new_domain)
    } catch (error) {
        return res.status(400).send(null)        
    }

}

async function getAllDomains(req,res){
    try {
        
        const all_domains = await domain.find({})
        return res.status(200).send(all_domains)


    } catch (error) {
        return res.status(400).send(null)                
    }


}

module.exports = {
    getAllDomains,
    createDomain
}