package com.example.coolfashion.products;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
// Change Long to whatever datatype your id is in CategoriesModel
public interface ProductsRepository extends JpaRepository<ProductsModel, Long> {
    List<ProductsModel> getProductsModelByAmountLessThan(long amount);
    ProductsModel findByName(String productTitle);
}
