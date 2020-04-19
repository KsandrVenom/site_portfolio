"use strict";

let themeButton = document.querySelector('input');
let themeStyle = document.querySelector('link');


themeButton.onclick = function () {
    if (themeButton.checked) {
        themeStyle.href = "pro-dark-theme-style.css";
    } else { 
        themeStyle.href = "style.css";
    };
}; 

