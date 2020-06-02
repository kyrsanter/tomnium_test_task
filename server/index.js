const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
http.createServer(app);

app.get('/', (req, res) => {
    try {
        let filePath = path.join(__dirname, 'data/data.json');
        let file = fs.readFileSync(filePath, 'utf8');
        res.status(200).send(file)
    }
    catch (err) {
        res.status(404).send({error: 'Something wrong'})
    }
});

// app.get('/*', (req, res) => {
//     res.status(404).send({error: 'Not found'})
// });

app.listen(3001);