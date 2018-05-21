var applyLanguage = function (lang) {
    return lang;
};

var getCurrentLanguage = function () {
    var defaultLanguage = 'ua';
    var currentLang;
    if (localStorage.getItem("language") !== null) {
        currentLang = localStorage.getItem("language");
        document.getElementById(currentLang).checked = true;
    } else {
        currentLang = defaultLanguage;
        document.getElementById(currentLang).checked = true;
    }
    return currentLang;
};

var lang = applyLanguage(getCurrentLanguage());
var check = document.getElementsByTagName('input');

function changeLanguage () {
    lang = this.nextSibling.data.toLowerCase().trim();
    var langEls = document.getElementsByClassName('lang');
    for (var i=0; i<langEls.length; i++) {
        if(langEls[i].classList.contains('lang-' + lang)){
            langEls[i].classList.add('visible');
        } else {
            langEls[i].classList.remove('visible');
        }
    }
}

for(var i = 0; i < check.length; i++) {
    check[i].onclick = changeLanguage;
}

var langEls = document.getElementsByClassName('lang-' + lang);
for (var i=0; i<langEls.length; i++) {
    if(langEls[i].classList.contains('lang-' + lang)){
        langEls[i].classList.add('visible');
    } else {
        langEls[i].classList.remove('visible');
    }
}

var $save = document.querySelector('html body button#save');
function setLanguage(){
    localStorage.setItem('language', lang);
}
$save.addEventListener('click', setLanguage);