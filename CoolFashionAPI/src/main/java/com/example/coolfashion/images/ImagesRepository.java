package com.example.coolfashion.images;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
// Change Long to whatever datatype your id is in CategoriesModel
public interface ImagesRepository extends JpaRepository<ImagesModel, Long> {
    ImagesModel getImagesModelById(long id);

    @Query(value = "SELECT i.* FROM product_images pi \n" +
            "\tJOIN images i ON pi.image_id = i.id \n" +
            "\tJOIN products p ON pi.product_id = p.id \n" +
            "\tWHERE p.id = :productId", nativeQuery = true)
    List<ImagesModel> findImagesByProductName(Long productId);
}