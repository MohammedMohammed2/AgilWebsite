import { postRequest, getRequest } from "./utils/api.js";

const email = document.getElementById("email").value;
const title = document.getElementById("title").value;
const message = document.getElementById("subject").value;
const sendBtn = document.getElementById("submit-contact");


sendBtn.addEventListener("click", async () => {
    // Creates message object
    const messageObject = {
        message: message,
        title: title,
        email: email
    }

    // Sends API request with messageObject as body-parameter
    const createdMessage = await postRequest("/contact-messages/create", messageObject)
    // Only to confirm message being created / failing
    if (createdMessage) {
        alert("Created message: " + JSON.stringify(createdMessage));
    } else {
        alert("Failed to create message");
    }
})