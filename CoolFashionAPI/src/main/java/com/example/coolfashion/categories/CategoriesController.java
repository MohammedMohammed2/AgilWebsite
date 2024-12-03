package com.example.coolfashion.categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoriesController {
    @Autowired
    CategoriesService categoriesService;


}
