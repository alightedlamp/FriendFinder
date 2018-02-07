const friends = require('../data/friends');

module.exports = app => {
  app.get('/api/friends', (req, res) => res.json(friends));
  app.post('/api/friends', (req, res) => {
    const answers = req.body;
    friends.push(answers);

    // Loop through friends array
    // Test answers.answer against friend.answer
    const match = friends.map(friend => {
      return friend.answer.reduce(
        (m, a, i) => Math.abs(a - answers.answer[i]),
        0
      );
    });
    console.log(match);
    return res.json(match);
  });
};
