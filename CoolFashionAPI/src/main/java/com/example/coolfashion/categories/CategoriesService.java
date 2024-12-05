package com.example.coolfashion.categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service

public class CategoriesService {
    @Autowired
    CategoriesRepository categoriesRepository;

    @Transactional
    public CategoriesModel createCategory(CategoriesModel category){
        return categoriesRepository.save(category);
    }
}
