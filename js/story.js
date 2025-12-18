alert ('yay! story time whoo hoo!')

var button = document.getElementById("submit")
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
        placeholder.innerHTML = words[index].value;
    });

    document.getElementsById('story-screen').style.display = "block";


}




