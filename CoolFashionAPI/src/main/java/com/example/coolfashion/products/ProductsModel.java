package com.example.coolfashion.products;

import com.example.coolfashion.categories.CategoriesModel;
import com.example.coolfashion.images.ImagesModel;
import com.example.coolfashion.product_categories.ProductCategoriesModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity(name = "products")
@Table(name = "products")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductsModel {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "price")
    private int price;

    @Column(name = "amount")
    private int amount;

    @Column(name = "size")
    private String size;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private CategoriesModel category;

    @OneToMany(mappedBy = "product")
    private Set<ImagesModel> images;
}
