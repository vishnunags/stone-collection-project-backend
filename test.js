const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.options("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.sendStatus(204);
});

// app.use(express.static('public'));

// Include product routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

//const product321 = require('./rou/prod321');
//app.use('/api/prod', product321);