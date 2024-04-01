document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.innerText === 'C') {
          display.value = '';
        } else if (button.innerText === '=') {
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = 'Error';
          }
        } else if (button.innerText === '±') {
          display.value = -parseFloat(display.value);
        } else if (button.innerText === '%') {
          display.value = parseFloat(display.value) / 100;
        } else if (button.innerText === '√') {
          display.value = Math.sqrt(parseFloat(display.value));
        } else {
          display.value += button.innerText;
        }
      });
    });
  });
  