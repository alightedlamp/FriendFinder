const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/img', express.static(path.join(__dirname, 'app/public/img')));
app.use('/js', express.static(path.join(__dirname, 'app/public/js')));
app.use('/css', express.static(path.join(__dirname, 'app/public/css')));

app.listen(PORT, () => console.log(`App running on ${PORT}`));

require('./app/routes/api')(app);
require('./app/routes/html')(app);
