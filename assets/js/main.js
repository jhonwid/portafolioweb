//* ||||||||||||||||||||||||||||||||||||||| *//
//* FUNCIONALIDAD DE DESPLAZAR HACIA ARRIBA *//
//* |||||||||||||||||||||||||||||||||||||| *//
const desplazarArriba = document.querySelector("#scroll-up");

desplazarArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});


//* |||||||||||||||||||||||||||||||||||| *//
//* SELECCIONES PARA BARRA DE NAVEGACION *//
//* |||||||||||||||||||||||||||||||||||| *//
const men = document.querySelector("#menu-mobile");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

men.addEventListener("click", () => {
    ul.classList.toggle("show");
});


//* ||||||||||||||||||||||||||||||||||||||||||||||||| *//
//* CERRAR EL MENU CUANDO SE HACE CLICK EN UN ENLACE *//
//* ||||||||||||||||||||||||||||||||||||||||||||||||| *//
// Seleccionar enlaces de navegacion
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);


//* |||||||||||||||||||||||||||| *//
//* EFECTO TITULO DE HERO IMAGE *//
//* |||||||||||||||||||||||||||| *//
// Lista de frases
var _CONTENT = [
    "¡Hola! Soy un desarrollador Full-Stack⚙️. Aprendiendo 📚 más y más sobre este enorme universo 🌌, ¡el desarrollo web! ¡Podemos construir sitios web impresionantes, aplicaciones y más juntos!",
];
// Frase actual en proceso
var _PART = 0;
// Número de carácter de la frase actual en proceso
var _PART_INDEX = 0;
// Almacena el identificador devuelto por setInterval
var _INTERVAL_VAL;
// Elemento que contiene el texto
var _ELEMENT = document.querySelector("#paragraph-container");
// Elemento de cursor
var _CURSOR = document.querySelector("#cursor");

// Implementa el efecto de escritura
function Type() {
    // Obtener una subcadena con 1 carácter añadido
    var texto = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = texto;
    _PART_INDEX++;

    // Si se ha mostrado la frase completa, comenzar a borrar la frase después de un tiempo
    if (texto === _CONTENT[_PART]) {
        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Delete, 100);
        }, 3000);
    }
}

// Implementa el efecto de borrado
function Delete() {
    // Obtener una subcadena con 1 carácter eliminado
    var texto = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = texto;
    _PART_INDEX--;

    // Si la frase ha sido borrada, comenzar a mostrar la siguiente frase
    if (texto === '') {
        clearInterval(_INTERVAL_VAL);

        // Si la frase actual era la última, mostrar la primera, de lo contrario, pasar a la siguiente
        if (_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;

        _PART_INDEX = 0;

        // Comenzar a mostrar la siguiente frase después de un tiempo
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}

// Iniciar el efecto de escritura al cargar
_INTERVAL_VAL = setInterval(Type, 150);


//* |||||||||||||||||||||||||||| *//
//*          MODO OSCURO         *//
//* |||||||||||||||||||||||||||| *//
const darkbtn = document.getElementById('darkbtn');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
    body.classList.add('dark-mode');
    darkbtn.checked = true;
}
darkbtn.addEventListener('change', () => {
    if (darkbtn.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});


//* |||||||||||||||||||||||||||| *//
//*       SCROLL ANIMATION       *//
//* |||||||||||||||||||||||||||| *//
const boxes = document.querySelectorall(".box");

const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientReact().top;

        if (boxTop < triggerBottom) box.classList.add("show");

        else box.classList.remove("show");
    });
};

window.addEventListener("scroll", checkBoxes);
checkBoxes();


