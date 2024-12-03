package com.example.coolfashion.wishlist;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Change entity and table to match DB
@Entity(name = "wishlist")
@Table(name = "wishlist")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class WishlistModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_id")
    private Long productId;

}
