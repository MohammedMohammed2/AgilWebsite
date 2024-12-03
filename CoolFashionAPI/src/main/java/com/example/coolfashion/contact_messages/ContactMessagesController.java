package com.example.coolfashion.contact_messages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactMessagesController {
    @Autowired
    ContactMessagesService contactMessagesService;

}
