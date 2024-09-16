const express = require('express');
const app = express();

const port = 9000;

app.get('/', (req, res) => {
    res.json({message : 'Hello World'});
})

app.listen(9000, () => {
    console.log(`Server is running at port ${port} `);
})