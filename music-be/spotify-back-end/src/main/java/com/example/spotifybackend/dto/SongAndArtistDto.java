package com.example.spotifybackend.dto;

import com.example.spotifybackend.model.Category;
import jakarta.validation.constraints.NotNull;

public class SongAndArtistDto {
    private Integer id;
    @NotNull
    private  String fileName;
    @NotNull

    private String title;
    @NotNull

    private String artist;
    @NotNull

    private  boolean isFavorited;
    @NotNull

    private String image;
    @NotNull
    private String category;


    public SongAndArtistDto() {
    }

    public SongAndArtistDto(Integer id, String fileName, String title, String artist, boolean isFavorited, String image, String category) {
        this.id = id;
        this.fileName = fileName;
        this.title = title;
        this.artist = artist;
        this.isFavorited = isFavorited;
        this.image = image;
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

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public boolean isFavorited() {
        return isFavorited;
    }

    public void setFavorited(boolean favorited) {
        isFavorited = favorited;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
