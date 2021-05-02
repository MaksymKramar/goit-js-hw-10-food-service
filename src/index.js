import menu from './menu.json';

import dish from './templates/dishes.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchToggle = document.querySelector('#theme-switch-toggle');
const dishesMenu = document.querySelector('.js-menu');
const markUp = dish(menu);


dishesMenu.insertAdjacentHTML('beforeend', markUp);

class BodyTheme{
    constructor({ selector}) {
        this.bodyRef = document.querySelector(selector)
        this.bodyRef.className = Theme.LIGHT
        this._init()   
        
    }
     
    _init() {
        const persistedThemeState = localStorage.getItem('Theme-DARK')
                
        if (persistedThemeState !== null) {
            const shouldBeDarkTheme = JSON.parse(persistedThemeState)
            
            if (shouldBeDarkTheme) {
                console.log(this.darkThem())
                switchToggle.checked = true;
            } 
        }
    }
    

    darkThem() {
        this.bodyRef.classList.add(Theme.DARK)
        this.bodyRef.classList.remove(Theme.LIGHT)

        localStorage.setItem('Theme-DARK','true')
    }
    lightThem() {
        this.bodyRef.classList.add(Theme.LIGHT)
        this.bodyRef.classList.remove(Theme.DARK)

        localStorage.setItem('Theme-DARK','false')
    }

};

const bodyColor = new BodyTheme({
    selector: 'body',
    className: Theme.LIGHT
});

switchToggle.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
    
    if (switchToggle.checked  === true) {
        bodyColor.darkThem()
    }
//    if (document.body.className === Theme.LIGHT) {
//        bodyColor.darkThem()    
//     }
    else {
       bodyColor.lightThem()
    }    
};

