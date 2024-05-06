package com.example.spotifybackend.controller;

import com.example.spotifybackend.config.security.service.JwtResponse;
import com.example.spotifybackend.config.security.service.JwtService;
import com.example.spotifybackend.config.security.service.UserService;
import com.example.spotifybackend.model.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Account user) {

        Authentication authentication
                = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtService.generateTokenLogin(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Account currentUser = userService.findByUsername(user.getUsername());
        System.out.println("kk " + currentUser);
        return ResponseEntity.ok(new JwtResponse(currentUser.getId(), jwt, userDetails.getUsername(), userDetails.getUsername(), userDetails.getAuthorities(),"","",""));
    }

    @GetMapping("/getInfo")
    public ResponseEntity<?> getInfo(@RequestHeader("Authorization")String token) {
        String newToken = token.substring(7);
        String userName = jwtService.getUsernameFromJwtToken(newToken);
        System.out.println(userName);
        return ResponseEntity.ok(userName);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logoutSuccessful(@RequestHeader("Authorization")String token){
        String newToken = token.substring(7);
        jwtService.addToBlackList(newToken);
        return ResponseEntity.ok("ok dang xuat");
    }
}
