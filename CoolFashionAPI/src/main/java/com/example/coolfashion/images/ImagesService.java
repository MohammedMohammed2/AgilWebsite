package com.example.coolfashion.images;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImagesService {
    @Autowired
    ImagesRepository imagesRepository;
}
