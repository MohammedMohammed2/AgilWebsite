package com.example.coolfashion.categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoriesService {
    @Autowired
    CategoriesRepository categoriesRepository;
}
