package com.example.coolfashion.category_products;

import com.example.coolfashion.categories.CategoriesModel;
import com.example.coolfashion.categories.CategoriesRepository;
import com.example.coolfashion.products.ProductsModel;
import com.example.coolfashion.products.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryProductsService {
    @Autowired
    private CategoriesRepository categoriesRepository;

    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private CategoryProductsRepository categoryProductsRepository;

    public CategoryProductsModel createRelation(String categoryName, String productName) {
        CategoriesModel category = categoriesRepository.findByName(categoryName);
        ProductsModel product = productsRepository.findByTitle(productName);

        CategoryProductsModel relation = new CategoryProductsModel();
        relation.setCategory(category);
        relation.setProduct(product);

        return categoryProductsRepository.save(relation);
    }

    public List<ProductsModel> getProductsByCategory(String categoryName) {
        return categoryProductsRepository.findProductsByCategoryName(categoryName);
    }
}
