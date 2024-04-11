package com.example.spotifybackend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "song")
public class Song {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Integer id;
    private  String fileName;
    private String title;
    private  boolean isFavorited;

    @OneToOne(mappedBy = "song")
    private Artist artist;



    public Song() {
    }

    public Song(Integer id, String fileName, String title, boolean isFavorited, Artist artist, Category category) {
        this.id = id;
        this.fileName = fileName;
        this.title = title;
        this.isFavorited = isFavorited;
        this.artist = artist;
        this.category = category;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isFavorited() {
        return isFavorited;
    }

    public void setFavorited(boolean favorited) {
        isFavorited = favorited;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @ManyToOne()
    @JoinColumn(name = "id_category")
    private Category category;


}
