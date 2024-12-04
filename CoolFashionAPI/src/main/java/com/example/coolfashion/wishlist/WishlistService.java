package com.example.coolfashion.wishlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishlistService {
    @Autowired
    WishlistRepository wishlistRepository;

    public List<WishlistModel> getAllWishListed(){return wishlistRepository.findAll();}

}