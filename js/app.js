const numberOfcharacter = document.getElementById("number")
const passTextBox = document.getElementById("password")
const button = document.getElementById("button")

function generatePassword()
{

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*1234567890_+"
    const passowrdLength = numberOfcharacter.value
    let password = ""

    for(let i = 0; i<passowrdLength; i++)
    {
        let randomPassword = Math.floor(Math.random() * characters.length)
        password+= characters.substring(randomPassword, randomPassword + 1)
    }
    passTextBox.value = password

}

button.addEventListener("click", generatePassword)


