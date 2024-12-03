package com.example.coolfashion.product_categories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Change Long to whatever datatype your id is in CategoriesModel
public interface ProductCategoriesRepository extends JpaRepository<ProductCategoriesModel, Long> {
}
