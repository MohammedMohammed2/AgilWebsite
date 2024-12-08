package com.example.coolfashion.product_images;

import com.example.coolfashion.images.ImagesModel;
import com.example.coolfashion.images.ImagesRepository;
import com.example.coolfashion.products.ProductsModel;
import com.example.coolfashion.products.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductImagesService {
    @Autowired
    ProductImagesRepository productImagesRepository;

    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private ImagesRepository imagesRepository;

    public ProductImagesModel createRelation(String productName, Long imageId) {
        ProductsModel product = productsRepository.findByName(productName);
        ImagesModel image = imagesRepository.findById(imageId).orElse(null);

        ProductImagesModel relation = new ProductImagesModel();
        relation.setProduct(product);
        relation.setImage(image);

        return productImagesRepository.save(relation);
    }
}