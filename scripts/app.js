function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + '';
  if (pinString.length == 4) {
    return pin;
  }
  else {
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
  const number = event.target.innerText;
  const numberInput = document.getElementById('display-number');
  if (isNaN(number)) {
    if (number == 'C') {
      numberInput.value = '';
    }
  }

  else {
    const previousNumber = numberInput.value;
    const newNumber = previousNumber + number;
    numberInput.value = newNumber;
  }
})
function varify() {
  const pin = document.getElementById('display-pin').value;
  const numbers = document.getElementById('display-number').value;
  const notifyFail = document.getElementById('notify-fail');
  const notifySuccess = document.getElementById('notify-success');
  if (pin == numbers) {
    notifySuccess.style.display = 'block';
    notifyFail.style.display = 'none';
  }
  else {
    notifyFail.style.display = 'block';
    notifySuccess.style.display = 'none';
  }
}
