package com.example.spotifybackend.repository;

import com.example.spotifybackend.model.Song;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ISongRepository extends JpaRepository<Song, Integer>, JpaSpecificationExecutor<Song> {
    @Query(value = "select * from song", nativeQuery = true)
    Page<Song> getAllSong(Pageable pageable);

    @Query(value = "select * from song", nativeQuery = true)
    List<Song> getAllSongs();


    List<Song> findSongsByTitleContaining(String name);

    List<Song> findSongsByArtist_Name(String name);

    @Query(value = "DELETE FROM song WHERE id = :id", nativeQuery = true)
    void deleteSong(@Param("id") Integer id);
}
