package com.example.coolfashion.images;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImagesService {
    @Autowired
    ImagesRepository imagesRepository;

    public ImagesModel getImage(long imageId){
        return imagesRepository.getImagesModelById(imageId);
    }
    public ImagesModel createNewImage(ImagesModel image){
        return imagesRepository.save(image);
    }

    public List<ImagesModel> getImagesByProduct(Long productId) {
        return imagesRepository.findImagesByProductName(productId);
    }
}