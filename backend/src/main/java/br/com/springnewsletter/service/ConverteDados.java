package br.com.springnewsletter.service;

import java.net.http.HttpResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ConverteDados {
	private ObjectMapper objectMapper = new ObjectMapper();
	
	public JsonNode converterEmJson(HttpResponse<String> response) {
		String json = response.body();
		JsonNode jsonNode = null;
		try {
			jsonNode = objectMapper.readTree(json);
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return jsonNode;
	}
	
	public <T> T setGenericDTO(HttpResponse<String> response, Class<T> classe) {
		try {
			System.out.println(response.body());
            return objectMapper.readValue(response.body(), classe);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
	}
}
