package com.example.coolfashion.category_products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryProductsService {
    @Autowired
    CategoryProductsRepository categoryProductsRepository;
}
