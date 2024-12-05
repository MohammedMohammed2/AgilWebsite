package com.example.coolfashion.contact_messages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class ContactMessagesService {
    @Autowired
    ContactMessagesRepository contactMessagesRepository;

    public ContactMessagesModel createMessage(ContactMessagesModel contactMessagesModel) {
        contactMessagesRepository.save(contactMessagesModel);
        return contactMessagesModel;
    }

    public List<Object> getAllMessages() {
        return Collections.singletonList(contactMessagesRepository.findAll());
    }
}