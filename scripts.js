
function displayOperand(button) {
    if (operatorActive) {
      display.textContent = ''
      operatorActive = false
    }
    if (display.textContent.length < 13) {
      display.textContent += button.textContent
    }
}

function selectOperator(button) {
  operatorActive = true
  operand.push(+display.textContent)
  operand.shift()
  console.log(operand[0], operand[1], operator)
  result = calculate(operand[0], operand[1], operator)
  if (result.toString().length > 13) result = result.toPrecision(10)
  if (result.toString().length > 13) result = 'error'
  display.textContent = result
  if (button.textContent !== 'CALC!') {
      console.log(operator)
      operator = button.textContent
      operand.push(result)
      operand.shift()
  }
}

function calculate(total, operand, operator) {
  total = +total
  operand = +operand
  if (operator === '*') return (total * operand)
  if (operator === '/' && operand === 0) return ('lol nice try')
  else if (operator === '/') return (total / operand)
  if (operator === '+') return (total + operand)
  if (operator === '-') return (total - operand)
}

function clear() {
  display.textContent = 0
  operatorActive = true
  operand = [0,0]
  operator = '+'
}

function backspace() {
  if (operatorActive === false) {
    text = display.textContent
    newText = text.slice(0,-1)
    display.textContent = newText
  }
}

buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')
let operatorActive = true
let operand = [0,0]
let operator = '+'

buttons.forEach(button => button.addEventListener('click', () => {
  if (button.classList.contains('numbers')) displayOperand(button)
  if (button.classList.contains('operators')) selectOperator(button)
  if (button.classList.contains('clear')) clear()
  if (button.classList.contains('backspace')) backspace()
}))


// User types the operand and its shown in display.
// When the user presses an operator. The display number is stored as oeprand the total is caluclated
// When the user then presses another key the display resets. The user will then press an operator and the pr