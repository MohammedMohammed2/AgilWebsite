package com.example.coolfashion.product_images;

import com.example.coolfashion.images.ImagesModel;
import com.example.coolfashion.products.ProductsModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Change entity and table to match DB
@Entity(name = "product_images")
@Table(name = "product_images")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductImagesModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "image_id")
    private ImagesModel image;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductsModel product;
}
