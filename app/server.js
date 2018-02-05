const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.port || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`App running on ${PORT}`));

require('./routes/api')(app);
require('./routes/html')(app);
