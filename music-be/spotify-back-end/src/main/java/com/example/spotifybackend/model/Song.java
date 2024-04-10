package com.example.spotifybackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "song")
public class Song {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Integer id;
    private  String fileName;
    private String title;
    private String artist;
    private  boolean isFavorited;

    public Song() {
    }

    public Song(Integer id, String fileName, String title, String artist, boolean isFavorited) {
        this.id = id;
        this.fileName = fileName;
        this.title = title;
        this.artist = artist;
        this.isFavorited = isFavorited;
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
    @ManyToOne()
    @JoinColumn(name = "id_category")
    private Category category;


}
