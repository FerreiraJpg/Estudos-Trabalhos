const readline = require('readline')

let main = [1,2,3,4,5,6,7,8,9]
let user = []
let ia = []

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let somaUser = 0
let somaIa = 0
while(somaUser != 15 && somaIa != 15 && main.length != 0) {

  
  let number = 0
  rl.question('first number? ', (num) => {
    number += num
    user.push(number)
    number = 0
    rl.close();
  });
  
  console.log(number)

  user.map((number) => {
    somaUser += number
    console.log(somaUser)
  })
  
  ia.map((number) => {
    somaIa += number
    console.log(somaIa)
  })
}


  










