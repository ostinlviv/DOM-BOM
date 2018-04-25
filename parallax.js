

window.addEventListener('scroll', function () {
    var $parallax = document.getElementById('parallax');
    var posY = window.scrollY * 0.3;
    // noinspection JSAnnotator
    $parallax.style.backgroundPosition = '0px '+posY+'px';
});