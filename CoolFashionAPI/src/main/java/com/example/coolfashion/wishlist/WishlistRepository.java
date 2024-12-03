package com.example.coolfashion.wishlist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WishlistRepository  extends JpaRepository<WishlistModel, Long> {
}
