//Express dependencies
const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send("you requested for root path");
})

app.get("/get", (req, res) => {
    res.send("you requested for get path");
});

app.get('/pathVariable/:name', (req, res) => {
    res.send(req.params.name);
})

app.post('/post', (req, res) => {
    res.send("you requested for post paths");
})









const port = 3000;
app.listen(port, () => {
    console.log(`listening at port ${port}`);
})