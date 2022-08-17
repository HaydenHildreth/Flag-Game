function generateNumber() {
    let value = Math.floor(Math.random() * 26);
    return value;
}

generateNumber()

let replacenumber = document.getElementById("flagpicture")
replacenumber.innerHTML = value;