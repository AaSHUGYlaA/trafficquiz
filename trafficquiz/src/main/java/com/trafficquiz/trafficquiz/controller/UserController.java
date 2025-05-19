package com.trafficquiz.trafficquiz.controller;


import com.trafficquiz.trafficquiz.DTO.LoginRequest;
import com.trafficquiz.trafficquiz.DTO.LoginResponse;
import com.trafficquiz.trafficquiz.model.User;
import com.trafficquiz.trafficquiz.repository.UserRepository;
import com.trafficquiz.trafficquiz.service.UserService;
import com.trafficquiz.trafficquiz.util.JwtResponse;
import com.trafficquiz.trafficquiz.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;  // Inject PasswordEncoder

    @Autowired
    private UserRepository userRepository;  // Inject UserRepository

    @CrossOrigin(origins = "http://localhost:3001")
    @PostMapping("/register")
    public ResponseEntity<String> signup(@RequestBody User user) {
        try {
            if (userRepository.existsByUsername(user.getUsername())) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("{\"message\": \"Username is already taken.\"}");
            }
            if (userRepository.existsByEmail(user.getEmail())) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("{\"message\": \"Email is already in use.\"}");
            }

            // Hash password and save user
            user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));
            user.setRole("user");
            userRepository.save(user);

            return ResponseEntity.status(HttpStatus.CREATED)
                    .body("{\"message\": \"User created successfully\"}");

        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("{\"message\": \"" + e.getMessage() + "\"}");
        }
    }

    @CrossOrigin(origins = "http://localhost:3001")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        try {
            Optional<User> existingUser = Optional.ofNullable(userRepository.findByUsername(user.getUsername()));

            if (!existingUser.isPresent()) {
                System.out.println("❌ User not found: " + user.getUsername());
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password.");
            }

            User foundUser = existingUser.get();
            System.out.println("✅ User found: " + foundUser.getUsername());

            if (!passwordEncoder.matches(user.getPassword(), foundUser.getPasswordHash())) {
                System.out.println("❌ Password does not match for user: " + user.getUsername());
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password.");
            }

            String token = jwtUtil.generateToken(foundUser.getUsername());
            System.out.println("✅ Login successful, token generated.");

            return ResponseEntity.ok().body(new LoginResponse(token, foundUser.getId(), foundUser.getUsername()));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error.");
        }
    }
}




