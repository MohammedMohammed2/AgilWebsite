package com.example.coolfashion.product_images;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductImagesController {
    @Autowired
    ProductImagesService productImagesService;
}
