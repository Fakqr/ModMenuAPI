function createModMenu(NAME, DESCRIPTION, AUTHOR) {
    // Variables
    var ModMenuName = NAME;
    if (!NAME) {
        ModMenuName = 'ModMenu';
    };

    var ModMenuDesc = DESCRIPTION;
    if (!DESCRIPTION) {
        ModMenuDesc = 'Nice Portable Mod Menu';
    };

    var ModMenuAuthor = AUTHOR;
    if (!AUTHOR) {
        ModMenuAuthor = 'Unknown';
    };

    var ModMenuID = `ModMenuMain_${ModMenuName}`;

    // Elements
    var Main = document.createElement('div');
    Main.classList.add('ModMenuMain');
    Main.id = ModMenuID;
    var NameElement = document.createElement('h2');
    NameElement.innerHTML = ModMenuName;
    var DescElement = document.createElement('h3');
    DescElement.innerHTML = ModMenuDesc;
    var AuthorElement = document.createElement('h4');
    AuthorElement.innerHTML = `Author : ${ModMenuAuthor}`;

    var DestroyMenuButton = document.createElement('button');
    DestroyModMenu.innerText = 'X';

    // Style
    var CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    
    .ModMenuMain {
        position: fixed;
        background: linear-gradient(90deg, #252525, #252525, #252525);
        border: none;
        width: 500px;
        height: 200px;
        top: 50%;
        left: 50%;
        margin-top: -100px;
        margin-left: -250px;
    }

    .ModMenuMain .DestroyModMenu {
        position: fixed;
        top: 0;
        right: 0;
        margin: 5px;
        color: red;
    }

    .ModMenuMain h1, h2, h3, h4, p {
        font-family: "Roboto", sans-serif;
        color: white;
        margin: 5px;
    }
    `;

    // Functions
    function destroyModMenu() {
        Main.remove();
    };

    // Add Functionality
    DestroyMenuButton.onclick = destroyModMenu;

    // Finish Up
    document.body.appendChild(Main);

    Main.appendChild(NameElement);
    Main.appendChild(DescElement);
    Main.appendChild(AuthorElement);
    Main.appendChild(DestroyMenuButton);

    var ModMenuStyle = document.createElement('style');
    ModMenuStyle.textContent = CSS;
    Main.appendChild(ModMenuStyle);

    return Main;
};

function createTab(MODMENU, NAME) {
};

function createItem(TAB, NAME, FUNCTION) {
};