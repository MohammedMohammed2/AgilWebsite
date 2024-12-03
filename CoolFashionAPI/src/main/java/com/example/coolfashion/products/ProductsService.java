package com.example.coolfashion.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductsService {
    @Autowired
    ProductsRepository productsRepository;

    @Autowired
    private ProductsRepository productRepository;



    public ProductsModel createProduct(ProductsModel product) {
        return productRepository.save(product);
    }
}

