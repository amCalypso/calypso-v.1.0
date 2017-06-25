package com.calypso.controller;



/*@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration() */
public class LoginControllerTest {
	
	/*
	 private MediaType contentType = new MediaType(MediaType.APPLICATION_JSON.getType(),
	            MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));

	    private MockMvc mockMvc;
	    
	    
	 @Autowired
	    private WebApplicationContext webApplicationContext;

	    @Before
	    public void setup() throws Exception {
	        this.mockMvc = webAppContextSetup(webApplicationContext).build();
	    }
	
	
	@Test
    public void testCreateAggregate() throws Exception {

        AggregateRequestBody arb = buildRequestBody();        
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/calypso").headers(getHttpHeaders())
                .content(RestTemplateUtil.convertObjectToJson(arb)).contentType(contentType)).andDo(print())
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.jsonPath("name", is(arb.getName())))
                .andExpect(MockMvcResultMatchers.jsonPath("correlationId", notNullValue()))
                .andExpect(MockMvcResultMatchers.jsonPath("groupByElements", hasItems(arb.getGroupByElements().toArray())));
    }*/

}
