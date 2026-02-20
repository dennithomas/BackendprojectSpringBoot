package com.ecommerce.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.dto.UserInformation;
import com.ecommerce.repositary.UserRepository;  // If this is the one you want to use  // Make sure this import matches

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;  // Changed from UserRepositoryOld to UserRepository

    @PostMapping("/user-registration")
    public UserInformation userRegistration(@RequestBody @Valid UserInformation userInformation) {
        return userRepository.save(userInformation);
    }

    
    
    @PostMapping("/user-login")
    public ResponseEntity<String> userLogin(@RequestBody UserInformation loginUser) {

        System.out.println("Email Received: " + loginUser.getEmailid());
        System.out.println("Password Received: " + loginUser.getPassword());

        Optional<UserInformation> user = userRepository.findByEmailid(loginUser.getEmailid());

        if (user.isPresent() &&
            user.get().getPassword().trim()
            .equals(loginUser.getPassword().trim())) {

            return ResponseEntity.ok("Login Successful");
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Login Failed");
    }


	
//@PutMapping("/update-user")
//public String updateUser(@RequestBody UserInformation  userInformation) {
//
//
//	return("Update successfull....");
//}
//@DeleteMapping("/delete-user/{mobikkenumber}")
//public String deleteUserDetails(@PathVariable("mobilenumber")long mobikenumber) {
//
//	return "Deleted successfull...";
//}
}
