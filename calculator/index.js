function multiply(num1, num2) {
  return floatRound(num1 * num2);
}

function divide(num1, num2) {
  return floatRound(num1 / num2);
}

function sum(num1, num2) {
  return floatRound(num1 + num2);
}

function subtract(num1, num2) {
  return floatRound(num1 - num2);
}

function reverse(num) {
  if (num !== 0) {
    return -num;
  }
  return 0;
}

function floatRound(number) {
  return Math.round((number + Number.EPSILON) * 10000) / 10000;
}

function main() {
  let calculatorContainer = document.getElementsByClassName('calc-container')[0];
  let display = document.getElementById('ds');
  let memo = document.getElementById('j');

  let str1, str2, operatorStr;

  str2 = operatorStr = '';
  let state = 1;
  str1 = '0';

  let myDisplay = str1 + ' ' + operatorStr + ' ' + str2;
  display.innerText = myDisplay;

  function fn(event, str) {
    if (event.target && event.target.className === 'numbers') {
      if (str === '0') {
        str = event.target.innerText;
      } else {
        str += event.target.innerText;
      }
    }

    if (event.target && event.target.id === 'sq' ) {
      memo.innerText += '\n' + '√' + str + ' = ';
      str = '' + Math.sqrt(parseFloat(str));
      memo.innerText += str;
      if (isNaN(str)) {
        str = '0';
        memo.innerText += '\n' + 'Be aware that equation above is incorrect';
      }
    }

    if (event.target && event.target.id === 'cm' && !str.includes('.')) {
      str += '.';
    }

    if (event.target && event.target.id === 'bc' && str.length >= 1) {
      str = str.slice(0, -1);
      if (str === '') {
        str = '0';
      }
    }

    if (event.target && event.target.id === 'pm') {
      str = '' + reverse(parseFloat(str));
    }

    if (state === 1) {
      str1 = str;
    } else if (state === 2) {
      str2 = str;
    }
  }

  calculatorContainer.addEventListener('click', function (event){
    if (state === 1) {
      fn(event, str1);
    } else if (state === 2) {
      fn(event, str2);
    }

    if (event.target && event.target.className === 'operator' && state === 1) {
      operatorStr = event.target.innerText;
      state = 2;
    }

    if (event.target && event.target.id === 'bd') {
      str1 = '0';
      operatorStr = str2 = '';
    }

    if (str1.length >= 1 && str2.length >= 1 && event.target && event.target.id === 'eq') {
      switch (operatorStr) {
        case '+': {
          memo.innerText += '\n' + str1 + ' ' + operatorStr + ' ' + str2;
          str1 = '' + sum(parseFloat(str1), parseFloat(str2));
          memo.innerText += ' = ' + str1;
          operatorStr = str2 = ''
          state = 1;
          break;
        }
        case '-': {
          memo.innerText += '\n' + str1 + ' ' + operatorStr + ' ' + str2;
          str1 = '' + subtract(parseFloat(str1), parseFloat(str2));
          memo.innerText += ' = ' + str1;
          operatorStr = str2 = ''
          state = 1;
          break;
        }
        case '*': {
          memo.innerText += '\n' + str1 + ' ' + operatorStr + ' ' + str2;
          str1 = '' + multiply(parseFloat(str1), parseFloat(str2));
          memo.innerText += ' = ' + str1;
          operatorStr = str2 = ''
          state = 1;
          break;
        }
        case '∕': {
          memo.innerText += '\n' + str1 + ' ' + operatorStr + ' ' + str2;
          str1 = '' + divide(parseFloat(str1), parseFloat(str2));
          memo.innerText += ' = ' + str1;
          operatorStr = str2 = ''
          state = 1;
          if (str1 === 'Infinity' || isNaN(str1) || str1 === '-Infinity') {
            str1 = '0';
            memo.innerText += '\n' + 'Be aware that equation above is incorrect';
          }
          break;
        }
      }
    }

    myDisplay = str1 + ' ' + operatorStr + ' ' + str2;
    display.innerText = myDisplay;
  });
}

main();


