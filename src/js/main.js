import burger from "./modules/burger.js";
import dynamicAdapt from "./modules/dynamicAdapt.js";
import slider from "./modules/slider.js";
import toSwitchTabs from "./modules/tabs.js";
import popup from "./modules/popup.js";
import toggleButton from "./modules/toggleBtn.js";
import calculator from "./modules/calculator.js";
import maskPhone from "./modules/maskPhone.js";

window.addEventListener('DOMContentLoaded', function () {
    'use strict';
 
    dynamicAdapt();   
    burger();
    slider(); 
    toSwitchTabs(".include__item.tab-menu__item", ".include__wrapper-img.panel");
    toSwitchTabs(".formula__item.tab-menu__item ", ".formula__wrapper-content.panel");
    popup(); 
    toggleButton(".slider__toggle.toggle-btn", ".slider__speedometer");
    toggleButton(".formula__toggle.toggle-btn.toggle-btn--white", ".formula__tabs");
    calculator(); 
    maskPhone();
});  
  

 