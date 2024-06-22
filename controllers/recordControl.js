const record = require("../models/record");

async function createRecord(req,res){

    try {
      
      const new_rec = await record.create({
        user : req.body.userId,
        event: req.body.eventId,
        numberOfDaysAttended: req.body.numberOfDaysAttended
      })

      // DO the required changes
      // let formattedRes = {}
  
  
      return res.status(201).send(new_rec)
  
    } catch (error) {
        console.log(error)
        return res.status(400).send(null)
    }

}

async function getRecords(req,res){

    try {
        const filters = req.query;
        const all_records = await record.find(filters).populate([{
            path: 'event',
            populate:[
            {
                path: 'domain',
            },
            {
                path: 'venue' 
            }
            ]
        },
        {
            path : 'user'
        }
    ])
    
        return res.status(200).send(all_records);
    } catch (error) {
        return res.status(400).send(null);
    }

}


module.exports = {
    getRecords,
    createRecord
}
  