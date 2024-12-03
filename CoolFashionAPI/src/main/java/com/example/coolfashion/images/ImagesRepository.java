package com.example.coolfashion.images;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Change Long to whatever datatype your id is in CategoriesModel
public interface ImagesRepository extends JpaRepository<ImagesModel, Long> {
}