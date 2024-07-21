fruit=Number(prompt('what you want to eat'))
console.log(fruit)
food=Number(prompt('enter total food amount'))
tipPercentage=Number(prompt('enter tip percentage')/100)
tipAmount=food * tipPercentage
console.log('tipamount', tipAmount)
alert(tipAmount)// user ko dihaye ga ye
total=food+tipAmount;
console.log('total', total)
alert(total)
