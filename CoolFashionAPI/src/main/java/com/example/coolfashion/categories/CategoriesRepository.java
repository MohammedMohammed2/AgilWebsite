package com.example.coolfashion.categories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
// Change Long to whatever datatype your id is in CategoriesModel
public interface CategoriesRepository extends JpaRepository<CategoriesModel, Long> {

    List<CategoriesModel> findCategoriesByGender(Gender gender);
    CategoriesModel findByName(String name);
}
