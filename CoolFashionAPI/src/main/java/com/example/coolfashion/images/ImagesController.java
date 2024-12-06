package com.example.coolfashion.images;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ImagesController {
    @Autowired
    ImagesService imagesService;

    @GetMapping("/getImage")
    @ResponseBody
    public ResponseEntity<ImagesModel> getImage(@RequestParam (value = "id") long id) {
        ImagesModel image =  imagesService.getImage(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(image);
    }

    @PostMapping("/create/image")
    @ResponseBody
    public ResponseEntity<ImagesModel> createNewImage(@RequestBody ImagesModel image) {
        System.out.println("image:" + image.getIsPrimary());
        ImagesModel newImage =  imagesService.createNewImage(image);
        return ResponseEntity.status(HttpStatus.CREATED).body(newImage);
    }
}