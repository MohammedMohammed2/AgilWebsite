package com.example.coolfashion.contactmessages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactMessagesController {
    @Autowired
    ContactMessagesService contactMessagesService;

}
