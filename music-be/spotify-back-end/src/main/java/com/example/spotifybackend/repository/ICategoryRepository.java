package com.example.spotifybackend.repository;

import com.example.spotifybackend.model.Category;
import com.example.spotifybackend.model.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ICategoryRepository extends JpaRepository<Category, Integer> {
    @Query("SELECT c.name FROM Category c")
    List<String> getAllCategoryNames();
}
