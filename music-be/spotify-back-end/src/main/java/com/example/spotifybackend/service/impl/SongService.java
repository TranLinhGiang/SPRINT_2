package com.example.spotifybackend.service.impl;

import com.example.spotifybackend.model.Song;
import com.example.spotifybackend.repository.ISongRepository;
import com.example.spotifybackend.service.ISongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongService implements ISongService {
    @Autowired
    private ISongRepository iSongRepository;
    @Override
    public List<Song> getAllSong() {
        return iSongRepository.getAllSong();
    }
}
