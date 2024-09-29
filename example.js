(function () {
    var x = document.createElement('script');
    x.src = 'https://raw.githubusercontent.com/Fakqr/ModMenuAPI/refs/heads/main/ModMenuAPI.js';

    x.onload = function() {
        var ModMenu = createModMenu('Example', 'This is a Mod Menu!', 'You');
        var Tab01 = createTab(ModMenu, 'Tab 1');
        var Button01 = createButton(Tab01, 'Button', function () {
            console.log('The button was clicked!')
        });
    };

    x.onerror = function(error) {
        console.error('Error while loading script:', error);
    };

    document.head.appendChild(x);
})();