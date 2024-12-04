package com.example.coolfashion.contact_messages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactMessagesService {
    @Autowired
    ContactMessagesRepository contactMessagesRepository;

    public Object createMessage(String title, String message, String email) {
        ContactMessagesModel contactMessagesModel = new ContactMessagesModel();
        contactMessagesModel.setTitle(title);
        contactMessagesModel.setMessage(message);
        contactMessagesModel.setEmail(email);
        return contactMessagesRepository.save(contactMessagesModel);
    }
}