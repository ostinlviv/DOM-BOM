document.getElementById('player').style.top = '50px';
document.getElementById('player').style.left = '50px';


document.body.onkeydown = function (e) {
    var el = document.getElementById('player');

    var KEYCODE_LEFT = 37;
    var KEYCODE_RIGHT = 39;
    var KEYCODE_UP = 38;
    var KEYCODE_DOWN = 40;
    var KEYCODE_ENTER = 13;
    var KEYCODE_SPACE = 32;


    if (e.keyCode === KEYCODE_LEFT) {
        el.style.left = (parseInt(el.style.left) - 10) + 'px';
    }
    else if (e.keyCode === KEYCODE_RIGHT) {
        el.style.left = (parseInt(el.style.left) + 10) + 'px';
    }
    else if (e.keyCode === KEYCODE_UP) {
        el.style.top = (parseInt(el.style.top) - 10) + 'px';
    }
    else if (e.keyCode === KEYCODE_DOWN) {
        el.style.top = (parseInt(el.style.top) + 10) + 'px';
    }
    else if ((e.keyCode === KEYCODE_SPACE) || (e.keyCode === KEYCODE_ENTER)) {
        var $bullet = document.createElement('div');
        $bullet.classList.add('bullet');
        document.body.appendChild($bullet);
        $bullet.style.top = (parseInt(el.style.top)) + 'px';
        $bullet.style.left = (parseInt(el.style.left)) + 'px';
        setTimeout(function() {
      	   $bullet.classList.add('move');
        }, 0);
        setTimeout(function() {
    	     document.body.removeChild($bullet);
        }, 1000);
    }
}
