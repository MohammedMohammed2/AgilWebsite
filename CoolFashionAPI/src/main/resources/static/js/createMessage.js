import { postRequest } from "./utils/api.js";

const BASE_URL = "http://localhost:8080";
const email = document.getElementById("email").value;
const title = document.getElementById("title").value;
const message = document.getElementById("subject").value;
const sendBtn = document.getElementById("submit-contact");

sendBtn.addEventListener("click", async () => {
    const messageObject = {
        message: message,
        title: title,
        email: email
    }

    const createdMessage = await postRequest("/contact-message", messageObject)
    if (createdMessage) {
        alert("Created message: " + JSON.stringify(createdMessage));
    } else {
        alert("Failed to create message");
    }
})