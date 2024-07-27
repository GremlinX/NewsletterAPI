package br.com.springnewsletter.service;

import java.net.http.HttpResponse;

import com.fasterxml.jackson.databind.JsonNode;

public class JsonConverter {
	public JsonNode convertToJson(HttpResponse<String> response) {
		ConverteDados conversor = new ConverteDados();
		return conversor.converterEmJson(response);
	}
}