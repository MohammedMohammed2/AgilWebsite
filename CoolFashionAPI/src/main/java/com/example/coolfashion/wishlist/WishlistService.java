package com.example.coolfashion.wishlist;

import com.example.coolfashion.products.ProductsModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WishlistService {
    @Autowired
    WishlistRepository wishlistRepository;


    public WishlistModel addToWishList(WishlistModel wishlist) {
        return wishlistRepository.save(wishlist);
    }

    public List<ProductsModel> getAllWishListed() {
        List<WishlistModel> wishlists = wishlistRepository.findAll();
        return wishlists.stream()
                .map(WishlistModel::getProduct)
                .collect(Collectors.toList());
    }
}