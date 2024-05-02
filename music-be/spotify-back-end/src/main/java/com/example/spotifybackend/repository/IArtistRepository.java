package com.example.spotifybackend.repository;

import com.example.spotifybackend.model.Artist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IArtistRepository extends JpaRepository<Artist, Integer> {

    Artist findByName(String nameArtist);
}
