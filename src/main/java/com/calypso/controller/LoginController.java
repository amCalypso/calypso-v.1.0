package com.calypso.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.calypso.common.LoginRequest;
import com.calypso.common.LoginResponse;
import com.calypso.manager.LoginManager;




@RestController
@RequestMapping("api/v1/calypso")
public class LoginController {
	
	/*@Autowired
	RestTemplate restTemplate;*/

	@Autowired
	LoginManager loginManager;
	

	@RequestMapping(value = "", method = RequestMethod.POST)
	@ResponseBody
	
	public ResponseEntity<?> loginCheck(	
			@Validated @RequestBody(required = true) LoginRequest loginRequest) {
		LoginResponse response = new LoginResponse();

		try {			

			System.out.println("#############   " +loginRequest.getPassword());
			response = loginManager.authenticateUser(loginRequest);
		}	
		
		catch (Exception ex) {
			ex.printStackTrace();
			return new ResponseEntity<LoginResponse>(response,  HttpStatus.BAD_REQUEST);
		}
		
		return new ResponseEntity<LoginResponse>(response, HttpStatus.OK);
	}
	
	
	 /*@GetMapping("/")
	    public String home1() {
	        return "home";
	    }

	    @GetMapping("/home")
	    public String home() {
	        return "/home";
	    }

	    @GetMapping("/admin")
	    public String admin() {
	        return "/admin";
	    }

	    @GetMapping("/user")
	    public String user() {
	        return "/user";
	    }

	    @GetMapping("/about")
	    public String about() {
	        return "/about";
	    }

	    @GetMapping("/login")
	    public String login() {
	        return "/login";
	    }

	    @GetMapping("/403")
	    public String error403() {
	        return "/error/403";
	    }*/

}
