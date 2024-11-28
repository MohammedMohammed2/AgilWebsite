document.addEventListener('DOMContentLoaded', () => {
    // Load categories into menus
    loadCategoriesFromStorage();
});

// Load categories from localStorage and populate menus
function loadCategoriesFromStorage() {
    const menCategories = JSON.parse(localStorage.getItem('menCategories')) || [];
    const womenCategories = JSON.parse(localStorage.getItem('womenCategories')) || [];

    const menMenu = document.getElementById('men-menu');
    const womenMenu = document.getElementById('women-menu');

    // Populate Men menu
    menCategories.forEach(name => addMenuItem(menMenu, name));

    // Populate Women menu
    womenCategories.forEach(name => addMenuItem(womenMenu, name));
}

// Add a menu item to a dropdown
function addMenuItem(menu, name) {
    const menuItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'dropdown-item';
    link.textContent = name;

    menuItem.appendChild(link);
    menu.appendChild(menuItem);
}
