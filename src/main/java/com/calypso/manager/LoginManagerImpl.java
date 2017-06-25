package com.calypso.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.calypso.common.LoginRequest;
import com.calypso.common.LoginResponse;

@Service
public class LoginManagerImpl implements LoginManager {

	
	/*@Autowired
	RestTemplate restTemplate;*/

	/*@Autowired
	private HttpHeaders httpHeaders;*/

	LoginResponse response = new LoginResponse();
	
	@Override
	public LoginResponse authenticateUser(LoginRequest loginRequest) throws Exception {
		
		response.setRole("ADMIN");
		response.setStatus("SUCCECSS");
		
		return response;
	}

}
