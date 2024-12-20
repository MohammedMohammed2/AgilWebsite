import { createCategoryPage } from "./getCategorypictures.js";
const addCategoryBtn = document.getElementById("add-category-button");
addCategoryBtn.addEventListener("click", createCatgory)

const BASE_URL = "http://localhost:8080";

async function createCatgory() {
    const categoryType = document.getElementById('category-type').value;
    const categoryName = document.getElementById('category-name').value;

    if (categoryName.trim() === '') {
        alert('Please enter a valid product name.');
        return;
    }

    console.log(categoryType);
    console.log(categoryName);

    const categoryObject = { name: categoryName, gender: categoryType };
    sendFormData(categoryObject);

}
// document.addEventListener('DOMContentLoaded', () => {
//     // Load categories from localStorage on page load
//     loadCategoriesFromStorage();

//     document.getElementById('add-category-button').addEventListener('click', () => {

//         //const menuId = categoryType === 'men' ? 'men-menu' : 'women-menu';
//         // const menu = document.getElementById(menuId);

//         // const newMenuItem = document.createElement('li');
//         // const newLink = document.createElement('a');
//         // newLink.href = '#';
//         // newLink.className = 'dropdown-item';
//         // newLink.textContent = categoryName;

//         // newMenuItem.appendChild(newLink);
//         // menu.appendChild(newMenuItem);

//         // // Save the new category
//         // saveCategoryToStorage(categoryType, categoryName);

//         // document.getElementById('add-category-form').reset();
//         // alert(`Successfully added "${categoryName}" to the ${categoryType} category.`);
//     });
// });

async function sendFormData(categoryObject) {

    try {
        const response = await fetch(`${BASE_URL}/categories/new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(categoryObject)
        }).then((response) => {
            if (!response.status == 200) {
                throw new Error(`Failed to create category. Status: ${response.status}`);
            }
        })

    }
    catch (error) {
        console.error("Error", error.message);
    }
}

// Save a new category to localStorage
function saveCategoryToStorage(type, name) {
    const storageKey = type === 'men' ? 'menCategories' : 'womenCategories';
    const categories = JSON.parse(localStorage.getItem(storageKey)) || [];
    categories.push(name);
    localStorage.setItem(storageKey, JSON.stringify(categories));
}

// Load categories from localStorage
function loadCategoriesFromStorage() {
    const menCategories = JSON.parse(localStorage.getItem('menCategories')) || [];
    const womenCategories = JSON.parse(localStorage.getItem('womenCategories')) || [];

    const menMenu = document.getElementById('men-menu');
    const womenMenu = document.getElementById('women-menu');

    menCategories.forEach(name => addMenuItem(menMenu, name));
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


//html element
const menDropdown = document.getElementById("men-menu")
const womenDropdown = document.getElementById("women-menu")
const mainContentContainer = document.getElementById("main-content");

//empties the page, adds a title of the category in the page
menDropdown.addEventListener("click", (Event) => {
    populateCategory(Event);
})
womenDropdown.addEventListener("click", (Event) => {
    populateCategory(Event);
})

function populateCategory(Event) {
    createCategoryPage(Event, mainContentContainer)
}



