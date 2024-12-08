package com.example.coolfashion.wishlist;

import com.example.coolfashion.products.ProductsModel;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private ProductsModel product;

}