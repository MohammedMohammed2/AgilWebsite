package com.example.coolfashion.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class ProductsController {
    @Autowired
    ProductsService productsService;


    @GetMapping("/getProductForm")
    public String getProductForm(){
        return "create_new_product_in_category";
    }

    @PostMapping("/create_product")
    public ResponseEntity<ProductsModel> createProduct(@RequestBody ProductsModel product) {
        ProductsModel createdProduct = productsService.createProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }
}
