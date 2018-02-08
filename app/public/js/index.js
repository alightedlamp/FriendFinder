const questions = [
  'You enjoy food',
  'You enjoy television',
  'You like to go to the sports game',
  'You like queso',
  'You enjoy the company of others',
  'You do not enjoy the company of others',
  'You like to stay home and hide from the world',
  'You are a cat person',
  'Dogs are annoying',
  'Cats are obviously the best pets',
  'You are not easily manipulated by surveys',
  'You believe friends can be made by the assistance of a computer with a well thought out survey'
];

const showMatch = function(match) {
  console.log(match);
  $('#match-modal')
    .html(
      `
      <div class="modal">
        <h3>Your match:</h3>
        <p class="match-name">${match.name}</p>
        <div class="match-img">
          <img src="${match.img}"/>
        </div>
      </div>
  `
    )
    .show();
};

questions.map(question => {
  $('.quiz').prepend(`
    <div class="question mv4">
      <h3 class="f4 mv2">${question}</h3>
        <div class="option">
          <select name="answer" required>
            <option disabled selected value> -- Select an Option -- </option>
            <option value="0">Strongly Disagree</option>
            <option value="1">Disagree</option>
            <option value="2">Neutral</option>
            <option value="3">Agree</option>
            <option value="4">Strongly Agree</option>
          </select>
        </div>
      </div>
    </div>
  `);
});
$('.quiz').prepend(`
  <div class="mv1">
    <label>Name:</label> <input type="text" name="name" required/><br />
    <label>Photo:</label> <input type="text" name="img" required/>
  </div>
`);

$('.quiz').on('submit', function(e) {
  e.preventDefault();
  const answers = $(this).serializeArray();
  $.post('/api/friends', answers).done(res => showMatch(res));
});
$(window).click(function(e) {
  const modal = document.getElementById('match-modal');
  if (e.target === modal) {
    $('#match-modal').hide();
  }
});
