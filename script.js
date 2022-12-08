// if (module.hot) {
//     module.hot.accept();
// }


let menuOpen = false;


let hamburger = document.querySelector('.svg-icon');

const openMenu = function () {
    if (menuOpen == false) {
        document.querySelector('#nav').style = 'Display: Block;';
        menuOpen = true;
    } else if (menuOpen == true) {
        document.querySelector('#nav').style = 'Display: None;'
        menuOpen = false;
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

let body = document.querySelector('body');



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
    let navContainer = document.querySelector('.nav');

    for (let i = 0; i < 4; i++) {
        switch (i) {
            case 0:
                name = 'Home';
                html = `<button id="${id = i}">${name}</button>`;
                navContainer.insertAdjacentHTML('beforeend', html);
                break;
            case 1:
                name = 'About';
                html = `<button id="${id = i}">${name}</button>`;
                navContainer.insertAdjacentHTML('beforeend', html);
                break;
            case 2:
                name = 'Logs';
                html = `<button id="${id = i}">${name}</button>`;
                navContainer.insertAdjacentHTML('beforeend', html);
                break;
            case 3:
                name = 'Contact';
                html = `<button id="${id = i}">${name}</button>`;
                navContainer.insertAdjacentHTML('beforeend', html);
                break;
            default:
                console.log(`switch broke at ${i}`);
        }
        let navBtn = document.querySelectorAll('button');
        navBtn[i].addEventListener('click', navigationHandler);
    }

}


body.addEventListener('load', navLoader());
