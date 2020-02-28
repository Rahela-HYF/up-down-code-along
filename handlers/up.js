//function upHandler() {
 
 function up() {
 /* debugger;
  // read user input & cast to Number
  //increment = 1;
 const increment = document.getElementById('increment').value;
increment = parseInt(increment);
  // read state
 const oldCurrent = numbers.current;

  // perform logic, combining state with user input
  const newCurrent = oldCurrent + increment;

  // update state (.current & .past)
  numbers.past.push(numbers.current);
  numbers.current = newCurrent;

  // render to user
  document.getElementById('current-number').innerHTML = numbers.current;

  // log user interaction
  //  story name, increment, newCurrent, copy of state
log.push({
  handler: 'up',
  increment: increment,
  numbers:JSON.parse(JSON.stringify(numbers))
})*/

numbers.past.push(numbers.current);
numbers.current +=1;
document.getElementById('current-number').innerHTML = numbers.current;
const copiedState = JSON.parse(JSON.stringify(numbers));
log.push({
  handler: 'up',
  numbers: copiedState
}); 
}
