package com.example.coolfashion.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@Controller
public class ProductsController {
    @Autowired
    ProductsService productsService;

    // Allow CORS for this specific method
    @GetMapping("/my-endpoint")
    @CrossOrigin(origins = "https://localhost:8080", allowedHeaders = "Content-Type, Authorization", methods = {RequestMethod.GET})
    public List<Object> getData() {
        return Collections.singletonList(productsService.getProduct());
    }


    @PostMapping("/create_product")
    public ResponseEntity<ProductsModel> createProduct(@RequestBody ProductsModel product) {
        ProductsModel createdProduct = productsService.createProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }
}
