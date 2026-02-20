package com.ecommerce.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class UserExceptionHandler {
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public Map<String, String>methodArgumentNotValidException(MethodArgumentNotValidException invalidException){
		Map<String, String>map =new HashMap<String , String>();
		invalidException.getBindingResult().getFieldErrors().forEach(error ->{
			map.put(error.getField(),error.getDefaultMessage());
		});
		return map;
	}
	
	public void sqlExceptionHandler() {

	}
	

}
