package com.example.coolfashion.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductsController {
    @Autowired
    ProductsService productsService;

<<<<<<< HEAD
    @GetMapping("/getProductForm")
    public String getProductForm(){
        return "create_new_product_in_category";
    }

    @GetMapping("/index.html")
    public String getHome(){
        return "index";
    }

    @GetMapping("/contactUs.html")
    public String getContactForm(){
        return "contactUs";
    }
=======
>>>>>>> parent of 6d54726 (moved all the js files html and css to templates and static folders)

    @PostMapping("/create_product")
    public ResponseEntity<ProductsModel> createProduct(@RequestBody ProductsModel product) {
        ProductsModel createdProduct = productsService.createProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }
}
