const path = require('path');
const friends = require('../data/friends');

module.exports = app => {
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
  );
  app.get('/survey', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/survey.html'))
  );
};
