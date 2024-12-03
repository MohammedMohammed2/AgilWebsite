package com.example.coolfashion.categories;

import com.example.coolfashion.product_categories.ProductCategoriesModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity(name = "categories")
@Table(name = "categories")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CategoriesModel {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "category_title")
    private String name;

    @OneToMany(mappedBy = "category")
    private Set<ProductCategoriesModel> productCategories;
}