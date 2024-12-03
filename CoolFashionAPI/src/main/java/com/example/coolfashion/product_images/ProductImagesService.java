package com.example.coolfashion.product_images;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductImagesService {
    @Autowired
    ProductImagesRepository productImagesRepository;
}