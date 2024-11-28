//html element
const menDropdown = document.getElementById("dropdown-menu-men")
const womenDropdown = document.getElementById("dropdown-menu-women")
const mainContentContainer = document.getElementById("main-content");

//empties the page, adds a title of the category in the page
menDropdown.addEventListener("click", (Event) => {
    populateCategory(Event);
})
womenDropdown.addEventListener("click", (Event) => {
    populateCategory(Event);
})

function populateCategory(Event) {
    mainContentContainer.innerHTML = "";
    const newContainer = document.createElement("div")
    newContainer.classList.add("featured-products")


    const target = Event.explicitOriginalTarget.id;
    const title = document.createElement("h2");
    title.textContent = "" + target;
    newContainer.append(title);
    console.log(target);

    mainContentContainer.insertBefore(newContainer, null);
}