package com.trafficquiz.trafficquiz.repository;


import com.trafficquiz.trafficquiz.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByUsername(String username);

    // Optional: Find user by username
    User findByUsername(String username);

    User findByEmail(String email);

    boolean existsByEmail(String email);
}

