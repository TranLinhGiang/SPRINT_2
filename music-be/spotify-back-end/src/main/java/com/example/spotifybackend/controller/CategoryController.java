package com.example.spotifybackend.controller;

import com.example.spotifybackend.model.Category;
import com.example.spotifybackend.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/category")
public class CategoryController {
    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping("/listCategory")
    public ResponseEntity<List<String>> getAllCategoryNames() {
        List<String> categoryNames = this.iCategoryService.getAllCategoryNames();
        return new ResponseEntity<>(categoryNames, HttpStatus.OK);
    }
}
