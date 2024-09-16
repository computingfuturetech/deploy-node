const express = require('express');
const app = express();

const port = 9000;

app.use(express.json());

app.get('/', (req, res) => {
    const { name } = req.body;
    res.json({message : `Hello ${name}`});
})

app.listen(9000, () => {
    console.log(`Server is running at port ${port} `);
})