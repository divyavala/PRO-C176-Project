
let words = [
    {
        "inputs": 5,
        "category": "Sports",
        "word": "Chess"
    },
    {
        "inputs": 6,
        "category": "European Country Name",
        "word": "France"
    },

]

$(document).ready(function () {
    fillBlanks();
})

function fillBlanks() {
    //Select a random word
    const randomWord = words[Math.floor(Math.random() * words.length)];

    //Make sure blanks are empty to begin with
    $("#blanks").empty();

    //Show blanks uisng <span>
    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }

    //Show Hint
    $("#hint").html(randomWord.category)

    var gameOver=false
    //Fill blanks only if the character match is found
   
       
        if (life > 0 && correctGuess!=true && gameOver!=true) {           
            life = life - 1
            $("#life").text(life)
        }
        else if (life == 0) {
            $("#result").text("You Lost!!")
        }
    })
}

    
