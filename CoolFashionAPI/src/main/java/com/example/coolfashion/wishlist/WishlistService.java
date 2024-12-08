package com.example.coolfashion.wishlist;

import com.example.coolfashion.products.ProductsModel;
import com.example.coolfashion.products.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WishlistService {

    @Autowired
    private ProductsRepository productsRepository;
    @Autowired
    private WishlistRepository wishlistRepository;

    public void addProductToWishlist(Long productId) {
        // Fetch the product from the database using the productId
        ProductsModel product = productsRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // Create a new WishlistModel and save it
        WishlistModel wishlist = new WishlistModel();
        wishlist.setProduct(product);
        wishlistRepository.save(wishlist);
    }
    public List<ProductsModel> getAllWishListed() {
        List<WishlistModel> wishlists = wishlistRepository.findAll();
        return wishlists.stream()
                .map(WishlistModel::getProduct)
                .collect(Collectors.toList());
    }
}