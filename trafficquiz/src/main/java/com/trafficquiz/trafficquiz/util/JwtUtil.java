package com.trafficquiz.trafficquiz.util;


import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import java.util.Date;
import java.security.Key;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {


        @Value("${jwt.secret}") // ✅ Correct way to inject properties
        private String secret;

        private Key getSigningKey() {
            return Keys.hmacShaKeyFor(secret.getBytes()); // Uses a secure key
        }

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour expiration
                .signWith(getSigningKey(), SignatureAlgorithm.HS256) // ✅ Uses a secure key
                .compact();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(getSigningKey())
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }
}
//@Component
//public class JwtUtil {
//    private final String secretKey = "myVerySecretKeyForJwtToken123456789012";
//    public String generateToken(String username) {
//        return Jwts.builder()
//                .setSubject(username)
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour expiration
//                .signWith(SignatureAlgorithm.HS256, "secretKey")
//                .compact();
//    }
//    public String extractUsername(String token) {
//        return Jwts.parser()
//                .setSigningKey(secretKey)
//                .parseClaimsJws(token)
//                .getBody()
//                .getSubject();
//    }
//    public boolean isTokenExpired(String token) {
//        return extractExpiration(token).before(new Date());
//    }
//
//    private Date extractExpiration(String token) {
//        return Jwts.parser()
//                .setSigningKey(secretKey)
//                .parseClaimsJws(token)
//                .getBody()
//                .getExpiration();
//    }
//    public boolean validateToken(String token, String username) {
//        return (username.equals(extractUsername(token)) && !isTokenExpired(token));
//    }
//}

