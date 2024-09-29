(function () {
    // Loads ModMenu API
    var x = document.createElement('script');
    x.src = 'https://cdn.jsdelivr.net/gh/Fakqr/ModMenuAPI@latest/ModMenuAPI.js';

    // Waits until ModMenu API if fully loaded before continuing
    x.onload = function() {
        // Create ModMenu
        var ModMenu = createModMenu('Example', 'This is a Mod Menu!', 'You');
        // Create your first Tab
        var Tab01 = createTab(ModMenu, 'Tab 1');
        // Create your first Button
        var Button01 = createButton(Tab01 /* Put Tab Variable Here */, 'Button', function () {
            console.log('The button was clicked!');
        });

        /* 
        Another method to do button:

        function buttonClicked01() {
            console.log('The button was clicked!');
        };

        var Button01 = createButton(Tab01, 'Button', buttonClicked01);
        */
    };

    // Error Handling
    x.onerror = function(error) {
        console.error('Error while loading script:', error);
    };

    // Loads ModMenu API on to Document.head
    document.head.appendChild(x);
})();