package com.example.coolfashion.products;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Change Long to whatever datatype your id is in CategoriesModel
public interface ProductsRepository extends JpaRepository<ProductsModel, Long> {
}
