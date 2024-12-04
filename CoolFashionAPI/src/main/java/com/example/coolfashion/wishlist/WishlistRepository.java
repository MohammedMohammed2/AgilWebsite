package com.example.coolfashion.wishlist;

import com.example.coolfashion.products.ProductsModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WishlistRepository  extends JpaRepository<WishlistModel, Long> {


    List<WishlistModel> findAllById(int i);
}