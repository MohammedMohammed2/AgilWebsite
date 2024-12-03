package com.example.coolfashion.category_products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryProductsController {
    @Autowired
    CategoryProductsService categoryProductsService;
}
