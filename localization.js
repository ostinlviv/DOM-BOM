var applyLanguage = function (lang) {
    return lang;
};

var getCurrentLanguage = function () {
    var defaultLanguage = 'ua';
    var currentLang;
    if (localStorage.getItem("language") !== null) {
        currentLang = localStorage.getItem("language");
    } else {
        currentLang = defaultLanguage;
    }
    return currentLang;
};

var lang = applyLanguage(getCurrentLanguage());

var check = document.getElementsByTagName('input');
for(var i = 0; i < check.length; i++) {
    check[i].onclick = function () {
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
}

var langEls = document.getElementsByClassName('lang-' + lang);
for (var i=0; i<langEls.length; i++) {
    if(langEls[i].classList.contains('lang-' + lang)){
        langEls[i].classList.add('visible');
    } else {
        langEls[i].classList.remove('visible');
    }
}

var $save = document.querySelector('html body button#save')
$save.addEventListener('click', function(){
    localStorage.setItem('language', lang);
});