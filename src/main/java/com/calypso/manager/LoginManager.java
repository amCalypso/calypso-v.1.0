package com.calypso.manager;

import com.calypso.common.LoginRequest;
import com.calypso.common.LoginResponse;

public interface LoginManager {
	
	LoginResponse authenticateUser(LoginRequest loginRequest) throws   Exception ;

	

}
