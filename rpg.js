const generatePassword = document.getElementById("btn");
const inputArea = document.getElementById("inputArea");
generatePassword = document.addEventListener("click", function(){
    const password = randomizePassword();
    inputArea.value = password;
})

function randomizePassword () {
    const passwordCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!*@%[]_+';
    const passwordLength = 10;
    let password = '';
    for(let i= 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
        password += passwordCharacters[randomIndex];
    }
    return password;
}

