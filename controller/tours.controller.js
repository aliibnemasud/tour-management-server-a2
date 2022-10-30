const { getDb } = require("../utils/db/dbConnect")

module.exports.getAllTours = (req, res, next) => {
    res.send("All Tours")
}

module.exports.postTour = async (req, res, next) => {
    const db = getDb();
    try {
        const tour = req.body;
        const result = await db.collection("tours").insertOne(tour);        
        res.send("Tour Posted Successfully done!")
    } catch (error) {
        console.log(error)
        next(error)
    }    
}