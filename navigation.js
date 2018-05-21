var el = document.getElementById('player');
el.style.top = '50px';
el.style.left = '50px';

function getPosition() {
    if (el.classList.contains('move-left')) {
        return 'left';
    }
    else if (el.classList.contains('move-right')) {
        return 'right';
    }
    else if (el.classList.contains('move-up')) {
        return 'up';
    }
    else if (el.classList.contains('move-down')) {
        return 'down';
    }
}

document.body.addEventListener('keydown', function (e) {
    var KEYCODE_LEFT = 37;
    var KEYCODE_RIGHT = 39;
    var KEYCODE_UP = 38;
    var KEYCODE_DOWN = 40;
    var KEYCODE_ENTER = 13;
    var KEYCODE_SPACE = 32;
    if ((e.keyCode === KEYCODE_SPACE) || (e.keyCode === KEYCODE_ENTER)) {
        var $bullet = document.createElement('div');
        $bullet.classList.add('bullet');
        document.body.appendChild($bullet);

        var currentPosition = getPosition();

        $bullet.classList.remove('move-left');
        $bullet.classList.remove('move-right');
        $bullet.classList.remove('move-up');
        $bullet.classList.remove('move-down');

        if (currentPosition === 'right') {
            $bullet.style.top = (parseInt(el.style.top) + $bullet.clientHeight/2) + 'px';
            $bullet.style.left = (parseInt(el.style.left) + $bullet.clientWidth) + 'px';
            setTimeout(function () {
                $bullet.classList.add('move-right');
            }, 0);
        }
        else if (currentPosition === 'left') {
            $bullet.style.top = (parseInt(el.style.top) + $bullet.clientHeight/2) + 'px';
            $bullet.style.left = (parseInt(el.style.left)) + 'px';

            setTimeout(function () {
                $bullet.classList.add('move-left');
            }, 0);
        }
        else if (currentPosition === 'up') {
            $bullet.style.top = (parseInt(el.style.top)) + 'px';
            $bullet.style.left = (parseInt(el.style.left) + $bullet.clientWidth/2) + 'px';
            setTimeout(function () {
                $bullet.classList.add('move-up');
            }, 0);

        }
        else if (currentPosition === 'down') {
            $bullet.style.top = (parseInt(el.style.top) + $bullet.clientHeight) + 'px';
            $bullet.style.left = (parseInt(el.style.left) + $bullet.clientWidth/2) + 'px';
            setTimeout(function () {
                $bullet.classList.add('move-down');
            }, 0);

        }
        setTimeout(function () {
            document.body.removeChild($bullet);
        }, 2000);
    }
    else {
        el.classList.remove('move-left');
        el.classList.remove('move-right');
        el.classList.remove('move-up');
        el.classList.remove('move-down');


        if (e.keyCode === KEYCODE_LEFT) {
            el.style.left = (parseInt(el.style.left) - 10) + 'px';
            el.classList.add('move-left');
        }
        else if (e.keyCode === KEYCODE_RIGHT) {
            el.style.left = (parseInt(el.style.left) + 10) + 'px';
            el.classList.add('move-right');
        }
        else if (e.keyCode === KEYCODE_UP) {
            el.style.top = (parseInt(el.style.top) - 10) + 'px';
            el.classList.add('move-up');
        }
        else if (e.keyCode === KEYCODE_DOWN) {
            el.style.top = (parseInt(el.style.top) + 10) + 'px';
            el.classList.add('move-down');
        }
    }
});
