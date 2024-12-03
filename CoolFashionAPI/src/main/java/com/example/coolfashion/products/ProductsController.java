package com.example.coolfashion.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductsController {
    @Autowired
    ProductsService productsService;


}
