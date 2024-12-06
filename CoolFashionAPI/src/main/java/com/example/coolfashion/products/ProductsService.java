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

    public List<ProductsModel> getAllProducts(){return productRepository.findAll();}
    public ProductsModel getProductByTitle(String title){return productRepository.findByTitle(title);}

    public ProductsModel createProduct(ProductsModel product) {
        return productRepository.save(product);
    }

    public List<ProductsModel> getInsufficientProducts() {
       return productsRepository.getProductsModelByAmountLessThan(2);
    }

    public List<ProductsModel> getProductsByCategory(String categoryName) {
        return productsRepository.findProductsByCategoryName(categoryName);
    }
}

