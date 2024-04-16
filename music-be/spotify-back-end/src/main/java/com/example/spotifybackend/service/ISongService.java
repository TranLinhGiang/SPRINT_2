package com.example.spotifybackend.service;

import com.example.spotifybackend.model.Song;

import java.util.List;
import java.util.Optional;

public interface ISongService {

    List<Song> getAllSong();

    Song findById(int id);
}
