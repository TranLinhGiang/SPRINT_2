package com.example.spotifybackend.service.impl;

import com.example.spotifybackend.model.Artist;
import com.example.spotifybackend.model.Song;
import com.example.spotifybackend.repository.ISongRepository;
import com.example.spotifybackend.service.ISongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;

@Service
public class SongService implements ISongService {
    @Autowired
    private ISongRepository iSongRepository;
    @Autowired
    private ArtistService artistService;

    @Override
    public List<Song> getAllSongs(String name) {
        if (name.equals("") || name.equals("undefined")){
            return iSongRepository.getAllSongs();
        }
       List<Song> songList = iSongRepository.findSongsByTitleContaining(name);
        if (songList.isEmpty()) {
            songList = iSongRepository.findSongsByArtist_Name(name);
        }
        return  songList;
    }

    @Override
    public Page<Song> getAllSong(Pageable pageable) {
        return iSongRepository.getAllSong(pageable);
    }

    @Override
    public Song findById(int id) {
        return iSongRepository.findById(id);
    }

    @Override
    public void save(Song song) {
        iSongRepository.save(song);
    }
}
