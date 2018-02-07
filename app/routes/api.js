const friends = require('../data/friends');

module.exports = app => {
  app.get('/api/friends', (req, res) => res.json(friends));
  app.post('/api/friends', (req, res) => {
    const newFriend = req.body;
    const match = friends
      .map(friend => {
        return {
          name: friend.name,
          score: friend.answer
            .map((a, i) => Math.abs(a - newFriend.answer[i]))
            .filter(a => a)
            .reduce((s, x) => s + x, 0)
        };
      })
      .sort((p1, p2) => p1.score - p2.score)[0];

    friends.push(newFriend);
    return res.json(match);
  });
};
