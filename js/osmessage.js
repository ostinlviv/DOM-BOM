var navigatorMessageMap = {
    'mac': 'macos',
    'iphone': 'macos',
    'win': 'windows'
};

var platform = navigator.platform.toLowerCase();

for (var key in navigatorMessageMap) {
    key = key.toLowerCase();
    var version = navigatorMessageMap[key];

    if (platform.indexOf(key) >= 0){
        var os = document.getElementsByClassName('download-message');
        for(var i = 0; i < os.length; i++) {
            if (os[i].getAttribute('data-version') === version) {
                os[i].style.display = 'block';
            }
        }

    }
}