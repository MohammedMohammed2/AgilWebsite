package com.example.coolfashion.products;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
// Change Long to whatever datatype your id is in CategoriesModel
public interface ProductsRepository extends JpaRepository<ProductsModel, Long> {
    List<ProductsModel> getProductsModelByAmountLessThan(long amount);
    ProductsModel findByName(String productTitle);
    @Query(value = "SELECT p.* FROM category_products cp \n" +
            "\tJOIN products p ON cp.product_id = p.id \n" +
            "\tJOIN categories c ON cp.category_id = c.id \n" +
            "\tWHERE c.category_title = :categoryName", nativeQuery = true)
    List<ProductsModel> findProductsByCategoryName(String categoryName);
}
