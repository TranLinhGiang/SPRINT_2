package com.example.spotifybackend.controller;

import com.example.spotifybackend.dto.SongAndArtistDto;
import com.example.spotifybackend.model.Song;
import com.example.spotifybackend.service.ISongService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/find/{id}")
    public ResponseEntity<SongAndArtistDto> findSong(@PathVariable("id") Integer id){
        Song song = iSongService.findById(id);
        if (song == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        // Lấy thông tin về nghệ sĩ và hình ảnh từ đối tượng Artist của bài hát
        String artistName = song.getArtist().getName();
        String artistImage = song.getArtist().getImage();

        // Tạo đối tượng SongAndArtistDto và gán thông tin
        SongAndArtistDto songAndArtistDto = new SongAndArtistDto();
        songAndArtistDto.setId(song.getId());
        songAndArtistDto.setFileName(song.getFileName());
        songAndArtistDto.setTitle(song.getTitle());
        songAndArtistDto.setArtist(artistName); // Sử dụng tên nghệ sĩ
        songAndArtistDto.setFavorited(song.isFavorited());
        songAndArtistDto.setImage(artistImage); // Lấy hình ảnh từ đối tượng Artist

        return new ResponseEntity<>(songAndArtistDto, HttpStatus.OK);
    }
}
