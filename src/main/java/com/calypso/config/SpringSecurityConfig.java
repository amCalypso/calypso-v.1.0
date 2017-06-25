package com.calypso.config;

public class SpringSecurityConfig {
//public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

	/*@Autowired
	private AccessDeniedHandler accessDeniedHandler;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.csrf().disable()
		.authorizeRequests()
		.antMatchers("/", "/home", "/about").permitAll()
		.antMatchers("/admin/**").hasAnyRole("ADMIN")
		.antMatchers("/user/**").hasAnyRole("USER")
		.anyRequest().permitAll()
		.and()
		.formLogin()
		.loginPage("/login")
		.permitAll()
		.and()
		.logout()
		.permitAll()
		.and()
		.exceptionHandling().accessDeniedHandler(accessDeniedHandler);
	}
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {

		auth.inMemoryAuthentication()
		.withUser("user").password("password").roles("USER")
		.and()
		.withUser("admin").password("password").roles("ADMIN");
	}*/
	
	 /*@Override
	    protected void configure(HttpSecurity httpSecurity) throws Exception {
	        httpSecurity.authorizeRequests().antMatchers("/").permitAll();
	}
*/
}
