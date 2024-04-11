package com.example.spotifybackend.repository;

import com.example.spotifybackend.model.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ISongRepository extends JpaRepository<Song, Integer> {
    @Query(value = "select * from song", nativeQuery = true)
    List<Song> getAllSong();
}
