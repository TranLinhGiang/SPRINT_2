package com.example.spotifybackend.service.impl;

import com.example.spotifybackend.model.Artist;
import com.example.spotifybackend.repository.IArtistRepository;
import com.example.spotifybackend.service.IArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistService implements IArtistService {
    @Autowired
    private IArtistRepository iArtistRepository;
    @Override
    public List<Artist> getAllArtist() {
        return iArtistRepository.findAll();
    }

    @Override
    public void save(Artist artist) {
        iArtistRepository.save(artist);
    }

    @Override
    public Artist findByName(String nameArtist) {
        return iArtistRepository.findByName(nameArtist);
    }
}
