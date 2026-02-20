package com.ecommerce.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.dto.AdminInformation;
import com.ecommerce.repositary.AdminRepository;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class AdminController {
	 @Autowired
	    private AdminRepository adminRepository;
	
@PostMapping("/admin-registration")
	public AdminInformation adminRegistration( @RequestBody @Valid AdminInformation adminInformation) {
	return adminRepository.save(adminInformation);
	}

@PostMapping("/admin-login")
public ResponseEntity<String> adminLogin(@RequestBody AdminInformation loginAdmin) {
	  System.out.println("Email Received: " + loginAdmin.getEmailid());
      System.out.println("Password Received: " + loginAdmin.getPassword());
      Optional<AdminInformation> user = adminRepository.findByEmailid(loginAdmin.getEmailid());
      if (user.isPresent() &&
              user.get().getPassword().trim()
              .equals(loginAdmin.getPassword().trim())) {

              return ResponseEntity.ok("Login Successful");
          }

          return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                  .body("Login Failed");
      }

}




