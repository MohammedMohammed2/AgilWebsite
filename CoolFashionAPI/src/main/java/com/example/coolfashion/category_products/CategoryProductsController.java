package com.example.coolfashion.category_products;


import com.example.coolfashion.products.ProductsModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryProductsController {
    @Autowired
    CategoryProductsService categoryProductsService;

    @PostMapping("/categories/relation")
    @CrossOrigin(origins = "https://localhost:8080/", allowedHeaders = "Content-Type, Authorization", methods = {RequestMethod.POST})
    public ResponseEntity<CategoryProductsModel>createRelation(
            @Param("category") String category, @Param("product") String product) {
        return ResponseEntity.ok(categoryProductsService.createRelation(category, product));
    }

    
}
