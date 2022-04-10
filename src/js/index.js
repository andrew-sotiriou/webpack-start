import './css/style.css';
import Icon from './images/icon.png';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = "Hello World";
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    element.classList.add('hello');
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    return element;
  }
  
  document.body.appendChild(component());