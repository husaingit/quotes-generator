
url = "https://type.fit/api/quotes";
var btn = document.getElementById('quoteChanger')

function getNewQuote() {
   
    fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var textMsg = document.getElementById('quote-text');
    var authorName = document.getElementById('quote-writer');
    console.log(data);

    var totalQuotes = data.length;
    var randomNum = Math.floor(Math.random()*totalQuotes);
    var textMessage = data[randomNum].text;
    var author = data[randomNum].author;
    textMsg.innerHTML = textMessage;

    if( author == null) {
        authorName.innerHTML = "Anonymous"
    }
    else {
        authorName.innerHTML = author
    }
  });
}
getNewQuote();
btn.addEventListener('click',getNewQuote);
