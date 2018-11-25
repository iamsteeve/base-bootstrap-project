import * as _ from 'lodash';
import printMe from './print';
function component() {
  let element = document.createElement("div");
  let btn = document.createElement('button');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = 'Click me and check the console!';

  btn.onclick = printMe;

  element.appendChild(btn);


  return element;
}

document.body.appendChild(component());
