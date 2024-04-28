package com.example.spotifybackend.service;

import com.example.spotifybackend.model.Song;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ISongService {
    List<Song> getAllSongs();
    Page<Song> getAllSong(Pageable pageable);

    Song findById(int id);

    void save(Song song);
}
