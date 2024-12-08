package com.example.coolfashion.wishlist;

import com.example.coolfashion.products.ProductsModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

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
    public ResponseEntity<Map<String, String>> addToWishlist(@RequestBody Map<String, Long> body) {
        try {
            Long productId = body.get("productId");

            if (productId == null) {
                return ResponseEntity.badRequest().body(Map.of("message", "Product ID is required"));
            }

            // Add the product to the wishlist via the service layer
            wishlistService.addProductToWishlist(productId);

            // Return a JSON response with a success message
            return ResponseEntity.ok(Map.of("message", "Product has been added to your wishlist!"));
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(Map.of("message", "Error adding product to wishlist: " + ex.getMessage()));
        }
    }
}