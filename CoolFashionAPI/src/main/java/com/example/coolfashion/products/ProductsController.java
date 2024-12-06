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


@RestController
public class ProductsController {
    @Autowired
    ProductsService productsService;


    @GetMapping("/getProducts")
    @CrossOrigin(origins = "https://localhost:8080", allowedHeaders = "Content-Type, Authorization", methods = {RequestMethod.GET})
    public ResponseEntity<List<ProductsModel>> getData() {
        List<ProductsModel> allProducts = productsService.getAllProducts();
        return ResponseEntity.status(HttpStatus.FOUND).body(allProducts);
    }

    @GetMapping("/getProducts/insufficient")
    @ResponseBody
    public ResponseEntity<List<ProductsModel>> getInsufficientProducts() {
      List<ProductsModel> productsList = productsService.getInsufficientProducts();
      return ResponseEntity.status(HttpStatus.OK).body(productsList);
    }


    @PostMapping("/create_product")
    public ResponseEntity<ProductsModel> createProduct(@RequestBody ProductsModel product) {
        ProductsModel createdProduct = productsService.createProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }

    @GetMapping("/categories/{categoryName}/products")
    @CrossOrigin(origins = "https://localhost:8080/", allowedHeaders = "Content-Type, Authorization", methods = {RequestMethod.GET})
    public ResponseEntity<List<ProductsModel>> getProductsByCategory(@PathVariable String categoryName) {
        return ResponseEntity.ok(productsService.getProductsByCategory(categoryName));
    }

    @GetMapping("/getProduct/{title}")
    @CrossOrigin(origins = "https://localhost:8080/", allowedHeaders = "Content-Type, Authorization", methods = {RequestMethod.GET})
    public ResponseEntity<List<ProductsModel>> getProductByTitle(@PathVariable String title) {
        return ResponseEntity.ok(Collections.singletonList(productsService.getProductByTitle(title)));
    }
}
