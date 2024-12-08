import { getInsufficientUnitsProducts } from "./utils/utils.js";
//html element
const mainContentContainer = document.getElementById("main-content");

export async function lessThenTwoUnitsPage() {
    const pageTitle = document.createElement("h2");
    pageTitle.innerText = "Insufficient Units";

    mainContentContainer.innerHTML = "";
    //css
    mainContentContainer.classList.remove("main-content")
    mainContentContainer.classList.add("admin-units-page")

    const data = await getInsufficientUnitsProducts();

    const unorganizedList = document.createElement("ul");
    const listContainer = document.createElement("div");

    listContainer.classList.add("admin-units-list-container")

    data.forEach(element => {
        const list = document.createElement("li");
        console.log(element);
        list.innerText = element.name + " units: " + element.amount;
        unorganizedList.appendChild(list);
    });
    listContainer.appendChild(unorganizedList);
    mainContentContainer.append(pageTitle);

    mainContentContainer.appendChild(listContainer);

}
