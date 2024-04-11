package com.example.spotifybackend.controller;

import com.example.spotifybackend.dto.SongAndArtistDto;
import com.example.spotifybackend.model.Song;
import com.example.spotifybackend.service.ISongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/song")
public class SongController {

    @Autowired
    private ISongService iSongService;


    @GetMapping("/list")
    public ResponseEntity<List<SongAndArtistDto>> showAllSong() {
        List<SongAndArtistDto> songAndArtistDtoList = new ArrayList<>();
        List<Song> songs = this.iSongService.getAllSong();
        for (Song song : songs) {
            SongAndArtistDto songAndArtistDto = new SongAndArtistDto();
            songAndArtistDto.setId(song.getId());
            songAndArtistDto.setFileName(song.getFileName());
            songAndArtistDto.setTitle(song.getTitle());
            songAndArtistDto.setArtist(song.getArtist().getName()); // Sử dụng tên nghệ sĩ
            songAndArtistDto.setFavorited(song.isFavorited());
            songAndArtistDto.setImage(song.getArtist().getImage()); // Lấy hình ảnh từ đối tượng Artist
            songAndArtistDtoList.add(songAndArtistDto);
        }
        return new ResponseEntity<>(songAndArtistDtoList, HttpStatus.OK);
    }

}
