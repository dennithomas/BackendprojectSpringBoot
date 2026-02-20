package com.ecommerce.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "ecommerseusers")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserInformation {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id ;
	 @NotNull(message = "Name should not be null !!")
	 @Pattern(regexp = "^[A-Za-z]+$",message = "Name should not contains Digits")
	private String name;
	 @NotNull(message = "email should not be null !!")
	 @Email(message = "Invalid email id !!")
	private String emailid;
	 @Max(value=9999999999l,message = "Invalid mobile number !!")
	 @Min(value=6000000000l,message = "Invalid mobile number !!")
	private long mobilenumber;
	 @NotEmpty(message = "password should not be null !!")
	 @Pattern(regexp = "^[A-Za-z0-9]+$")
	private String password;
	 @NotEmpty(message = "this column should not be null !!")
	private String gender;
	 @NotEmpty(message = "this column should not be null !!")
	private String address;
}


