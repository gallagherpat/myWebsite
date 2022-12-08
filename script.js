// if (module.hot) {
//     module.hot.accept();
// }


let menuOpen = false;

let body = document.querySelector('body');

let hamburger = document.querySelector('.svg-icon');

const openMenu = function () {
    if (menuOpen == false) {
        displayButtons();
        menuOpen = true;
    } else if (menuOpen == true) {
        hideButtons();
        menuOpen = false;
    }
}

const displayButtons = function () {
    for (let i = 0; i < 4; i++) {
        switch (i) {
            case 0:
                document.querySelectorAll('button')[i].style = 'display: block;';
                break;
            case 1:
                document.querySelectorAll('button')[i].style = 'display: block;';
                break;
            case 2:
                document.querySelectorAll('button')[i].style = 'display: block;';
                break;
            case 3:
                document.querySelectorAll('button')[i].style = 'display: block;';
                break;
            default:
                console.log('shits wack');
        }
    }
}
const hideButtons = function () {
    for (let i = 0; i < 4; i++) {
        switch (i) {
            case 0:
                document.querySelectorAll('button')[i].style = 'display: none;';
                break;
            case 1:
                document.querySelectorAll('button')[i].style = 'display: none';
                break;
            case 2:
                document.querySelectorAll('button')[i].style = 'display: none';
                break;
            case 3:
                document.querySelectorAll('button')[i].style = 'display: none';
                break;
            default:
                console.log('shits wack');
        }
    }
}


const navigationHandler = function (id) {
    id = Number(this.id);
    switch (id) {
        case 0:
            window.location.href = 'test.html';
            break;
        case 1:
            window.location.href = 'about.html';
            break;
        case 2:
            window.location.href = 'logs.html'
            break;
        case 3:
            window.location.href = 'contact.html'
            break;
        default:
            console.log('nav handler broke')
    }
    console.log(id);
}


const navLoader = function () {
    let name;
    let id;
    let html;
    let navContainer = document.querySelector('.navbuttons');

    for (let i = 0; i < 4; i++) {
        switch (i) {
            case 0:
                name = 'Home';
                html = `<button class="navbtn" id="${id = i}">${name}</button>`;
                navContainer.insertAdjacentHTML('beforeend', html);
                break;
            case 1:
                name = 'About';
                html = `<button class="navbtn" id="${id = i}">${name}</button>`;
                navContainer.insertAdjacentHTML('beforeend', html);
                break;
            case 2:
                name = 'Logs';
                html = `<button class="navbtn" id="${id = i}">${name}</button>`;
                navContainer.insertAdjacentHTML('beforeend', html);
                break;
            case 3:
                name = 'Contact';
                html = `<button class="navbtn" id="${id = i}">${name}</button>`;
                navContainer.insertAdjacentHTML('beforeend', html);
                break;
            default:
                console.log(`switch broke at ${i}`);
        }
        let navBtn = document.querySelectorAll('button');
        navBtn[i].addEventListener('click', navigationHandler);
    }

}


hamburger.addEventListener('click', openMenu);


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt2J2TIITuSLixVLmeNVfl24cTQkO7M4E",
    authDomain: "patrickgallagherwebsite.firebaseapp.com",
    projectId: "patrickgallagherwebsite",
    storageBucket: "patrickgallagherwebsite.appspot.com",
    messagingSenderId: "613340694086",
    appId: "1:613340694086:web:178d92ff8ac8f8ebe66c47",
    measurementId: "G-K6D7T7N18B"
};




body.addEventListener('load', navLoader());
