const express = require('express');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("<h2>Home Page</h2><h3>Assignment 01</h3><p>Assignment topic : Node Modules, Express and REST API</p></p><br><b>Submitted by :</b><br>Name : Masum Billah<br>Student Id : 1910576118");
});
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);


app.listen(PORT, () => {
    console.log("Server is running...open postman and show the activity");
});