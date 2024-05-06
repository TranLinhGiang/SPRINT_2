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

    @Query(value = "SELECT song.id, song.title,song.is_favorited, song.is_favorited AS favorited, song.file_name, song.artist_id, song.category_id, " +
            "artist.name AS artist_name, artist.image AS artist_image, category.name AS category_name " +
            "FROM song " +
            "JOIN artist ON artist.id = song.artist_id " +
            "JOIN category ON category.id = song.category_id " +
            "WHERE artist.id = :id", nativeQuery = true)
    Song findById(@Param("id") int id);


    List<Song> findSongsByTitleContaining(String name);

    List<Song> findSongsByArtist_Name(String name);
}
