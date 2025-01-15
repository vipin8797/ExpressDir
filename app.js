//Express dependencies
const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send("you requested for root path");
});

app.get("/get", (req, res) => {
    res.send("you requested for get path");
});

app.post('/post', (req, res) => {
    res.send("you requested for post paths");
});

app.get('/pathVariable/:name', (req, res) => {
    res.send(req.params.name);
});



//Query Strings 
app.get('/query', (req, res) => {

    let { fruit, color } = req.query;
    res.send(`you requested for ${fruit} and ${color}`);
})






const port = 3000;
app.listen(port, () => {
    console.log(`listening at port ${port}`);
})