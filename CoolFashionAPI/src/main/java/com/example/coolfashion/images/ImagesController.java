package com.example.coolfashion.images;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImagesController {
    @Autowired
    ImagesService imagesService;
}
