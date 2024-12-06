package com.example.coolfashion.category_products;

import com.example.coolfashion.products.ProductsModel;
import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryProductsRepository extends JpaRepository<CategoryProductsModel, Long> {

    @Query(value = "SELECT p.* FROM category_products cp \n" +
            "\tJOIN products p ON cp.product_id = p.id \n" +
            "\tJOIN categories c ON cp.category_id = c.id \n" +
            "\tWHERE c.category_title = :categoryName", nativeQuery = true)
    List<ProductsModel> findProductsByCategoryName(@Param("categoryName") String categoryName);
}
