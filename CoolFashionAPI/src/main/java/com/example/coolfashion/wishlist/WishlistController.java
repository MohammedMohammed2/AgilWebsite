package com.example.coolfashion.wishlist;

import com.example.coolfashion.products.ProductsModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
public class WishlistController {
    @Autowired
    WishlistService wishlistService;

    @GetMapping("/getWishListed")
    @CrossOrigin(origins = "https://localhost:8080", allowedHeaders = "Content-Type, Authorization", methods = {RequestMethod.GET})
    public ResponseEntity<List<ProductsModel>> getWishListed() {
        List<ProductsModel> wishlistedProducts = wishlistService.getAllWishListed();
        return ResponseEntity.ok(wishlistedProducts);
    }

    @PostMapping("/addToWishList")
    public ResponseEntity<WishlistModel>addToWishList(@RequestBody WishlistModel wishList) {
        WishlistModel addedToWishList = wishlistService.addToWishList(wishList);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedToWishList);
    }
}