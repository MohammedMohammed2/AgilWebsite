package com.example.coolfashion.contact_messages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactMessagesController {
    @Autowired
    ContactMessagesService contactMessagesService;

    @PostMapping("/contact-message")
    public ResponseEntity<Object> createMessage(
            @Param(value = "title") String title, @Param(value = "message") String message, @Param(value = "email") String email
    ){

        return new ResponseEntity<>(contactMessagesService.createMessage(title, message, email), HttpStatus.CREATED);
    }

}