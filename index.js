function checkChar() {
    let char = document.getElementById("inputChar").value.toLowerCase();
    let result = document.getElementById("result");

    if (char.length !== 1 || !char.match(/[a-z]/)) {
        result.innerText = " Please enter a valid single alphabet";
        return;
    }

    if ("aeiou".includes(char)) {
        result.innerText = " It is a Vowel";
    } else {
        result.innerText = " It is a Consonant";
    }
}