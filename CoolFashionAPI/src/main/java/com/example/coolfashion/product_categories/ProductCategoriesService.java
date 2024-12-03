package com.example.coolfashion.product_categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductCategoriesService {
    @Autowired
    ProductCategoriesRepository productCategoriesRepository;
}
