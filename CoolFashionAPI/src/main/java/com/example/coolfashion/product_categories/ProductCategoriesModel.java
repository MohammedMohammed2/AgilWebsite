package com.example.coolfashion.product_categories;

import com.example.coolfashion.categories.CategoriesModel;
import com.example.coolfashion.products.ProductsModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Change entity and table to match DB
@Entity(name = "")
@Table(name = "")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductCategoriesModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    @JoinColumn(name = "product_id")
    private ProductsModel product;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private CategoriesModel category;
}
