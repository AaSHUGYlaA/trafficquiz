package com.trafficquiz.trafficquiz.service;


import com.trafficquiz.trafficquiz.model.User;
import com.trafficquiz.trafficquiz.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

        @Autowired
        private UserRepository userRepository;

        @Autowired
        private PasswordEncoder passwordEncoder;

        // Register a new user

    public String signup(User user) {
        // Check if user already exists by email
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email is already in use.");
        }

        // Hash password and save user
        user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash())); // Hash password
        user.setRole("user");  // Optional: Set the default role as "user"
        userRepository.save(user);
        return "User created successfully";
    }


    // Find user by email
        public User findByEmail(String email) {
            return userRepository.findByEmail(email);
        }


    public Optional<User> findByUsername(String username) {
        return Optional.ofNullable(userRepository.findByUsername(username)); // Ensure this is an Optional<User>
    }

}

