function generateNumber() {
    let value = Math.floor(Math.random() * 26) + 1;
    console.log(value)
    return value;
}

function select() {
    var guess = document.querySelector('#flag');
    var option = guess.value;
    console.log(option)
}

function check(option) {
    if option = value
    {
        console.log('Right answer');
        generateNumber();
    }
    else 
    {
        console.log('Incorrect');
        endGameFoo();
    }
}

generateNumber();
select();
