/*
1) chiedere il nome all'utente
2) chiedere il cognome
3)chiedere il colore preferito
stampare sulla pagina nomecognomecolorepreferito23
*/ 

const name = prompt('come ti chiami?')

const surname = prompt('qual è il tuo cognome?')

const favColor = prompt('qual è il tuo colore preferito?')

const output = name + surname + favColor + '23'

console.log(output)

document.getElementById('password').innerHTML = output