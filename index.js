// Code your solutions in this file

const messages = []

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return messages
}

function countdown(number){
    while (number > -1) {
        console.log(number)
        number -= 1
    }
}