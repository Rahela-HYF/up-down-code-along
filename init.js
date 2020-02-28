window.onload = function () {
  const copiedState =JSON.parse(JSON.stringify(numbers));
  log.push ({initialNumbers: copiedState});
  document.getElementById('current-number').innerHTML = numbers.current;

  debugger;
  // log initial state

  // render initial UI from state
}
