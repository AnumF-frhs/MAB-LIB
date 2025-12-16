alert ('yay! story time whoo hoo!')

var button = document.getElementById("submit");
console.log(button)

//console.log(words);

// console.log(placeholders);

button.addEventListener('click', getWords)

function getWords () {
    var words = document.querySelectorAll('input[type="text"]');
    var placeholders = document.querySelectorAll(".userInput");
    // console.log(words);
    // console.log(button);

    placeholders.forEach((placeholder,index) => {
    console.log(placeholder,index); 
    console.log(words[index]);
});
}

//18 nodesl
