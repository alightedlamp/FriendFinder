const friends = require('../data/friends');
const path = require('path');

module.exports = app => {
  app.get('/survey', (req, res) => {});
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
  );
};
