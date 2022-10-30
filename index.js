const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { connectToServer } = require('./utils/db/dbConnect');
const tours = require('./routes/v1/tours.route');

require('dotenv').config();
app.use(cors());
app.use(express.json());


// Db connection

connectToServer((err)=> {
    if(!err){
        console.log("DB Connected")
    } else {
        console.log(err)
    }
})

// Tour Routes

app.use('/tours', tours)

// api for all routes

app.get('/', (req, res) => {
  res.send('Server is running....')
})


// Routes for no routs
app.all("*", (req, res)=> {
  res.send("No Routes found!");
})

app.listen(port, () => {
  console.log(`Tour Server is running on ${port}`)
})