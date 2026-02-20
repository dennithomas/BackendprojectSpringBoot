package com.ecommerce.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "ecommerseproduct")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductAdmin {

	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id ;
	private String productname;
	private String serialnumber;
}
