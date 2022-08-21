function generateNumber() {
    let value = Math.floor(Math.random() * 101) + 1;
    console.log(value)
    return value;
}

function select() {
    var guess = document.querySelector('#flag');
    var option = guess.value;
    console.log(option)
}

function check(option) {
    if (option = value)
    {
        console.log('Right answer');
        //generateNumber(); new number
    }
    else 
    {
        console.log('Incorrect');
        //endGameFoo(); make foo
    }
}

function start() {
    console.log('starting');
}

generateNumber();
select();