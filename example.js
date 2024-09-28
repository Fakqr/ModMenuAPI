(function () {
    var script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/Fakqr/ModMenuAPI/refs/heads/main/ModMenuAPI.js';

    script.onload = function () {
        var ModMenu = createModMenu('Example', 'This is a Mod Menu!', 'You');
        var Tab01 = createTab(ModMenu, 'Tab 1');
        var Button01 = createButton(Tab01, 'Button', function () {
            console.log('The button was clicked!')
        });
    };
    
    document.head.appendChild(script);
})();