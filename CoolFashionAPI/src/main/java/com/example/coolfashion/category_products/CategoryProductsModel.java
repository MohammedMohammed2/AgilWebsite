package com.example.coolfashion.category_products;

import com.example.coolfashion.categories.CategoriesModel;
import com.example.coolfashion.products.ProductsModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "category_products")
@Table(name = "category_products")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CategoryProductsModel {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private ProductsModel product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private CategoriesModel category;
}
