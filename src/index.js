console.log("hi")

import * as module from './first.js'
module.intialPage();

import {food} from './foods.js'

import {contact} from './contact.js'

import {about}  from './about.js'

import './style.css'

let tabSwitchingModule = (function() {

    const firstTab = document.querySelector(".home");
    firstTab.addEventListener("click", module.intialPage);

    
    const homeTab = document.querySelector(".foods");
    homeTab.addEventListener("click", food);

    const menuTab = document.querySelector(".contact");
    menuTab.addEventListener("click", contact);

    const contactTab = document.querySelector(".about");
    contactTab.addEventListener("click", about);

})();