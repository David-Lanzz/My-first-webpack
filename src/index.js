import _ from 'lodash'
import './style.css';
function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello','webpack'], ' ');
    element.classList.add('hello');

//Loadash, now imported by this script
    return element;
}
document.body.appendChild(component())