import { getRequest } from "./utils/api.js";

const messageContent = document.getElementById("read-messages");









populatePage();

// Populates the page with all messages
function populatePage() {
    readMessages()
    .then((messageArray) => {
        for (const index in messageArray) {
            const objectTitle = messageArray[index].title;
            const objectMessage = messageArray[index].message;
            const objectEmail = messageArray[index].email;

            const messageDiv = document.createElement("div");

            const title = document.createElement("h2");
            title.textContent = objectTitle;

            const email = document.createElement("h3");
            email.textContent = objectEmail;

            const message = document.createElement("p");
            message.textContent = objectMessage;
            
            messageDiv.append(title);
            messageDiv.append(email);
            messageDiv.append(message);
            
            messageContent.append(messageDiv);
        }
    })
    
}

async function readMessages() {
    const response = await getRequest("/contact-messages/get")
    const data = await response.json();

    // Returns all messages from DB
    return data[0];
}