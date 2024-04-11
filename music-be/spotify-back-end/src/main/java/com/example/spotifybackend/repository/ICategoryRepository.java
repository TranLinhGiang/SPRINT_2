package com.example.spotifybackend.repository;

import com.example.spotifybackend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category, Integer> {
}
