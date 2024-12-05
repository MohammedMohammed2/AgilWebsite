import { createCategoryPage } from "./getCategorypictures.js";
import { getRequest } from "./utils/api.js";
import { getCategories } from "./utils/admin.js";

document.addEventListener('DOMContentLoaded', () => {
    // Load categories into menus
    loadCategoriesFromStorage();
});

const menDropdown = document.getElementById("men-menu")
const womenDropdown = document.getElementById("women-menu")
const mainContentContainer = document.getElementById("main-content");
const loginContentContainer = document.getElementById("login-container");

//empties the page, adds a title of the category in the page
menDropdown.addEventListener("click", (Event) => {
    populateCategory(Event);
})
womenDropdown.addEventListener("click", (Event) => {
    populateCategory(Event);
})

function populateCategory(Event) {
    loginContentContainer.innerHTML = "";
    createCategoryPage(Event, mainContentContainer)
}


// Get categories for respective gender, then populate the menu with categories
function loadCategoriesFromStorage() {

    getCategories("men")
    .then((categoriesList) => {
        for (const category in categoriesList) {
            const categoryName = categoriesList[category].name;
            const menMenu = document.getElementById('men-menu');
            addMenuItem(menMenu, categoryName)
        }
    })

    getCategories("women")
    .then((categoriesList) => {
        for (const category in categoriesList) {
            const categoryName = categoriesList[category].name;
            const womenMenu = document.getElementById('women-menu');
            addMenuItem(womenMenu, categoryName)
        }
    })
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
