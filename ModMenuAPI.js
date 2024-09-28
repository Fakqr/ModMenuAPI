function createModMenu(NAME, DESCRIPTION, AUTHOR) {
    // Variables
    var ModMenuName = toString(NAME);
    var ModMenuDesc = toString(DESCRIPTION);
    var ModMenuAuthor = toString(AUTHOR);

    // Elements
    var Main = document.createElement('div');

    var NameElement = document.createElement('h2');
    NameElement.innerHTML = ModMenuName;
    var DescElement = document.createElement('h3');
    DescElement.innerHTML = ModMenuDesc;
    var AuthorElement = document.createElement('h3');
    AuthorElement.innerHTML = ModMenuAuthor;

    // Style

    // Finish Up
    document.body.appendChild(Main);

    Main.appendChild(NameElement);
    Main.appendChild(DescElement);
    Main.appendChild(AuthorElement);

    return Main;
};

function createTab(MODMENU, NAME) {
};

function createItem(TAB, NAME, FUNCTION) {
};