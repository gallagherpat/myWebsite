// if (module.hot) {
//     module.hot.accept();
// }


let menuOpen = false;

let body = document.querySelector('body');

let hamburger = document.querySelector('.svg-icon');

let navBtns = document.querySelector('.buttonContainer');

const openMenu = function () {
    if (menuOpen == false) {
        console.log('click');
        navBtns.style = "display: flex;";
        menuOpen = true;
    } else if (menuOpen == true) {
        console.log('click');
        navBtns.style = "display: none;";
        menuOpen = false;
    }
}

const navigationHandler = function (id) {
    id = Number(this.id);
    switch (id) {
        case 0:
            window.location.href = 'index.html';
            break;
        case 1:
            window.location.href = 'about.html';
            break;
        case 2:
            window.location.href = 'games.html';
            break;
        case 3:
            window.location.href = 'logs.html'
            break;
        case 4:
            window.location.href = 'contact.html'
            break;
        default:
            console.log('nav handler broke')
    }
    console.log(id);
}


const navLoader = function () {
    console.log('loaded');
    let name;
    let html;
    let navContainer = document.querySelector('.navbuttons');

    for (let i = 0; i < 5; i++) {

        switch (i) {
            case 0:
                name = 'Home';
                html = `<button class="navbtn" id="${i}"><span>${name}<span></button>`;
                navContainer.insertAdjacentHTML('beforeend', html);
                break;
            case 1:
                name = 'About';
                html = `<button class="navbtn" id="${i}"><span>${name}<span></button>`;
                navContainer.insertAdjacentHTML('beforeend', html);
                break;
            case 2:
                name = 'Games';
                html = `<button class="navbtn" id="${i}"><span>${name}<span></button>`;
                navContainer.insertAdjacentHTML('beforeend', html);
                break;
            case 3:
                name = 'Logs';
                html = `<button class="navbtn" id="${i}"><span>${name}<span></button>`;
                navContainer.insertAdjacentHTML('beforeend', html);
                break;
            case 4:
                name = 'Contact';
                html = `<button class="navbtn" id="${i}"><span>${name}<span></button>`;
                navContainer.insertAdjacentHTML('beforeend', html);
                break;
            default:
                console.log(`switch broke at ${i}`);
        }
        let navBtn = document.querySelectorAll('.navbtn');
        navBtn[i].addEventListener('click', navigationHandler);
    }
}

const resize = function () {
    console.log(body.offsetWidth);
    let fragment = document.createDocumentFragment();
    if (body.offsetWidth > 1200) {
        for (let i = 0; i < 5; i++) {
            let piece = fragment.appendChild(document.getElementById(i));
            document.getElementById('navBtn').appendChild(piece);
        }
    } else if (body.offsetWidth < 1200) {
        for (let i = 0; i < 5; i++) {
            let piece = fragment.appendChild(document.getElementById(i));
            document.getElementById('mobile').appendChild(piece);
        }
    }
}


hamburger.addEventListener('click', openMenu);
body.addEventListener('load', navLoader());
resize();
window.addEventListener('resize', resize);


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

