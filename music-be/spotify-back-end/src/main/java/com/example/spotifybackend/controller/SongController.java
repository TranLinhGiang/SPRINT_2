package com.example.spotifybackend.controller;

import com.example.spotifybackend.dto.SongAndArtistDto;
import com.example.spotifybackend.model.Song;
import com.example.spotifybackend.service.ISongService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
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
        List<Song> songs = this.iSongService.getAllSongs();
        for (Song song : songs) {
            SongAndArtistDto songAndArtistDto = new SongAndArtistDto();
            songAndArtistDto.setId(song.getId());
            songAndArtistDto.setFileName(song.getFileName());
            songAndArtistDto.setTitle(song.getTitle());
            songAndArtistDto.setArtist(song.getArtist().getName()); // Sử dụng tên nghệ sĩ
            songAndArtistDto.setFavorited(song.isFavorited());
            songAndArtistDto.setImage(song.getArtist().getImage()); // Lấy hình ảnh từ đối tượng Artist
            songAndArtistDto.setCategory(song.getCategory().getName());
            songAndArtistDtoList.add(songAndArtistDto);
        }
        return new ResponseEntity<>(songAndArtistDtoList, HttpStatus.OK);
    }

    @GetMapping("/listPage")
    public ResponseEntity<Page<SongAndArtistDto>> showAllSong(
            @PageableDefault(value = 6) Pageable pageable
    ) {
        Page<Song> songsPage = this.iSongService.getAllSong(pageable);
        Page<SongAndArtistDto> songAndArtistDtoPage = songsPage.map(song -> {
            SongAndArtistDto songAndArtistDto = new SongAndArtistDto();
            songAndArtistDto.setId(song.getId());
            songAndArtistDto.setFileName(song.getFileName());
            songAndArtistDto.setTitle(song.getTitle());
            songAndArtistDto.setArtist(song.getArtist().getName()); // Sử dụng tên nghệ sĩ
            songAndArtistDto.setFavorited(song.isFavorited());
            songAndArtistDto.setImage(song.getArtist().getImage()); // Lấy hình ảnh từ đối tượng Artist
            songAndArtistDto.setCategory(song.getCategory().getName());
            return songAndArtistDto;
        });
        return new ResponseEntity<>(songAndArtistDtoPage, HttpStatus.OK);
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

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody @Valid SongAndArtistDto songAndArtistDto, BindingResult bindingResult){
        if (bindingResult.hasFieldErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),
                    HttpStatus.NOT_ACCEPTABLE
            );
        }
        Song song= new Song();
        BeanUtils.copyProperties(songAndArtistDto, song);
        iSongService.save(song);
        return ResponseEntity.ok("ok");
    }
}