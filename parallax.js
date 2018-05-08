

window.addEventListener('scroll', function () {
    var $parallax = document.getElementById('parallax');
    var posY = window.scrollY * 0.3;
    // noinspection JSAnnotator
    $parallax.style.transform = 'translateY('+posY+'px)';
});