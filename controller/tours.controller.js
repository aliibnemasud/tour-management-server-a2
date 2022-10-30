const { getDb } = require("../utils/db/dbConnect")

module.exports.getAllTours = async (req, res, next) => {
    const db = getDb();
    try {
        const result = await db.collection("tours").find({}).toArray();
        res.send({success: true, data: result})
    } catch (error) {
        console.log(error)
        next(error)        
    }    
}

module.exports.postTour = async (req, res, next) => {
    const db = getDb();
    try {
        const tour = req.body;
        const result = await db.collection("tours").insertOne(tour);
        if(!result.insertedId){
           return res.status(400).send({status: false, message: "Something went wrong!"})
        }                
        res.send({success: true, message: `Tour Posted Successfully with id: ${result.insertedId}`})
               
    } catch (error) {
        console.log(error)
        next(error)
    }    
}