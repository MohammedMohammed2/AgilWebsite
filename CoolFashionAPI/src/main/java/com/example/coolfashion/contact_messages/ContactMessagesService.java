package com.example.coolfashion.contact_messages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactMessagesService {
    @Autowired
    ContactMessagesRepository contactMessagesRepository;

    public ContactMessagesModel createMessage(ContactMessagesModel contactMessagesModel) {
        contactMessagesRepository.save(contactMessagesModel);
        return contactMessagesModel;
    }
}