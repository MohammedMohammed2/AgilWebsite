package com.example.coolfashion.contact_messages;

import com.example.coolfashion.categories.CategoriesModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ContactMessagesController {
    @Autowired
    ContactMessagesService contactMessagesService;

    @PostMapping("/contact-message")
    @CrossOrigin(origins = "https://localhost:8080/", allowedHeaders = "Content-Type, Authorization", methods = {RequestMethod.POST})
    public ResponseEntity<ContactMessagesModel> createMessage(@RequestBody ContactMessagesModel contactMessagesModel){
        ContactMessagesModel createdMessage = contactMessagesService.createMessage(contactMessagesModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMessage);
    }
}