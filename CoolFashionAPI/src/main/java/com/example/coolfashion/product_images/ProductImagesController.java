package com.example.coolfashion.product_images;

import com.example.coolfashion.products.ProductsModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ProductImagesController {
    @Autowired
    ProductImagesService productImagesService;

    @PostMapping("products/images/relation")
    @CrossOrigin(origins = "https://localhost:8080/", allowedHeaders = "Content-Type, Authorization", methods = {RequestMethod.POST})
    public ResponseEntity<ProductImagesModel> createRelation(
            @RequestParam(value = "product-name") String productName, @RequestParam(value = "image-id") Long imageId) {

        ProductImagesModel relation = productImagesService.createRelation(productName, imageId);
        return ResponseEntity.status(HttpStatus.CREATED).body(relation);
    }
}