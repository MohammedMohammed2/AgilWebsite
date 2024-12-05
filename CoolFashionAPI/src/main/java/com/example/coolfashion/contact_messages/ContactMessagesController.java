package com.example.coolfashion.contact_messages;

import com.example.coolfashion.categories.CategoriesModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactMessagesController {
    @Autowired
    ContactMessagesService contactMessagesService;

    @PostMapping("/contact-message")
    @ResponseBody
    public ResponseEntity<String> createMessage(@RequestBody ContactMessagesModel contactMessagesModel){
        contactMessagesService.createMessage(contactMessagesModel);
        return ResponseEntity.ok("Message created!");
    }
}