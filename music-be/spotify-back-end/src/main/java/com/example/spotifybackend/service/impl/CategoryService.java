package com.example.spotifybackend.service.impl;

import com.example.spotifybackend.model.Category;
import com.example.spotifybackend.repository.ICategoryRepository;
import com.example.spotifybackend.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository categoryRepository;
    @Override
    public List<String> getAllCategoryNames() {
        return categoryRepository.getAllCategoryNames();
    }
}
