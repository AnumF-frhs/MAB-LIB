alert ('yay! story time whoo hoo!')

var button = document.getElementById("submit");
console.log(button)

var words = document.querySelectorAll('input[type="text"]');
console.log(words);

button.addEventListener('click', getWords)

function getWords () {
    console.log(words);
    console.log(button);
}
