package com.example.coolfashion.categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoriesController {
    @Autowired
    CategoriesService categoriesService;

    @PostMapping(value = "/categories/new")
    @ResponseBody
    public ResponseEntity<CategoriesModel> createCategory(@RequestBody CategoriesModel category){
        System.out.println("it worked!");
        System.out.println(category);
        CategoriesModel object =  categoriesService.createCategory(category);
        return ResponseEntity.status(HttpStatus.CREATED).body(object);
    }


}
