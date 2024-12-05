package com.example.coolfashion.categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping(value = "/categories")
    @CrossOrigin(origins = "https://localhost:8080/", allowedHeaders = "Content-Type, Authorization", methods = {RequestMethod.POST})
    public List<Object> getCategoriesByGender(@RequestParam Gender gender) {
        return List.of(categoriesService.findCategoryByGender(gender));
    }
}
