package com.example.spotifybackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import org.springframework.data.repository.cdi.Eager;

@Entity
@Table(name = "artist")
public class Artist {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    private String image;

    public Artist() {
    }

    public Artist(Integer id, String name, String image, Song song) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.song = song;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @OneToOne
    @JsonBackReference
    @JoinColumn(name = "id_song")
    private Song song;

    public Song getSong() {
        return song;
    }

    public void setSong(Song song) {
        this.song = song;
    }

    public Artist(Integer id, String name, Song song) {
        this.id = id;
        this.name = name;
        this.song = song;
    }
}
