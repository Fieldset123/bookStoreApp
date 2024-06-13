const express = require('express');
const cors=require('cors')
require('dotenv').config();
const app = express()
const db=require('./db')

const bodyparser=require('body-parser');
app.use(bodyparser.json());


// {importing the routes}
const bookRoute=require('./routes/book.route.js');
const userRoute=require('./routes/user.route.js');

const PORT=process.env.PORT||4000;
app.use(cors());

//using the routes

app.use('/book',bookRoute);
app.use('/user',userRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})