import "./styles.css";

import { container } from "./home.js";
import { menuContainer } from "./menu.js";
import { aboutContainer } from "./about.js";

const content = document.getElementById('content')
const buttons = document.querySelectorAll('button')

content.appendChild(container)

buttons.forEach(button => {
    button.addEventListener('click',() => {
    if (content.hasChildNodes()) {
      content.removeChild(content.childNodes[0]);
       if (button.textContent === 'MENU'){
        content.appendChild(menuContainer)
       }else if (button.textContent === 'ABOUT'){
           content.appendChild(aboutContainer)
       }else{
        content.appendChild(container)
       }
}
      
    })

})
