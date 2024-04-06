package org.example.restcontroller;

import org.example.entity.User;
import org.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public List<User> registerUser(@RequestBody User user) {
        // Encrypt the password before saving
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        // Check if the registered user is admin
        if (user.getEmail().equals("admincampuscare@gmail.com")) {
            user.setAdmin(true);
        }

        // Save the new User to the database
        userRepository.save(user);

        // Retrieve all users from the database (optional)
        List<User> allUsers = userRepository.findAll();

        return allUsers;
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");
        User user = userRepository.findByEmail(email);
        if (user != null) {
            if (user.getEmail().equals("admincampuscare@gmail.com")) {
                user.setAdmin(true);
            }
            // Check if the password matches
            if (passwordEncoder.matches(password, user.getPassword())) {
                // Check if the user is an admin
                String userInfo = user.getUsername() + ", " + user.getEmail();
                return ResponseEntity.ok(userInfo);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password.");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }
    }
}
