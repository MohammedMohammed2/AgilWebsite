package com.example.coolfashion.category_products;

import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryProductsRepository extends JpaRepository<CategoryProductsModel, Long> {
}
