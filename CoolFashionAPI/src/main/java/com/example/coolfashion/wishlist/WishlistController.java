package com.example.coolfashion.wishlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
public class WishlistController {
    @Autowired
    WishlistService wishlistService;

    @GetMapping("/getWishListed")
    @CrossOrigin(origins = "https://localhost:8080", allowedHeaders = "Content-Type, Authorization", methods = {RequestMethod.GET})
    public List<Object> getWishListed(){
        return Collections.singletonList(wishlistService.getAllWishListed());
    }
}