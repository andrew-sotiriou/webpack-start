import '../scss/index.scss';
import Swing from '../images/tswing.png';
import Free from '../images/free.png';

const test = `hello webpacker. You crazy fool.`;
console.log(test);

function component(){
var element = document.createElement('div');
var myIcon = new Image();
myIcon.src = Swing;
element.appendChild(myIcon);
return element;
}

document.body.appendChild(component());