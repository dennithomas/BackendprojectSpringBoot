package com.ecommerce.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "ecommerceadmin")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AdminInformation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@NotNull(message = "type admin name")
	private String adname;
	@NotNull(message = "type admin mobile number")
	private long mobilenumber;
	@NotNull(message = "type email.id")
	private String emailid;
	@NotNull(message = "type the password")
	@Pattern(regexp = "[A-Za-z0-9]+", message = "Password must be alphanumeric")
	private String password;
	@NotNull(message = "choose the option")
	private String gender;
}
