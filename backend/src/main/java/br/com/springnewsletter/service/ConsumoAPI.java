package br.com.springnewsletter.service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import com.fasterxml.jackson.databind.JsonNode;

import br.com.springnewsletter.DTO.NewsItemDTO;
import br.com.springnewsletter.DTO.NewsPropertiesDTO;

public class ConsumoAPI {
	private final String API_KEY = "YOUR_API_KEY_HERE";

	private URLBuilder urlBuilder;
	private HttpRequestSender requestSender;
	private JsonConverter jsonConverter;
	private ConverteDados conversor;

	public ConsumoAPI() {
		this.urlBuilder = new URLBuilder();
		this.requestSender = new HttpRequestSender();
		this.jsonConverter = new JsonConverter();
		this.conversor = new ConverteDados();
	}
	
	private HttpResponse<String> sendRequest(String busca, String fonte) {
        HttpClient client = HttpClient.newHttpClient();
        String url = urlBuilder.buildURL(API_KEY, busca, fonte);
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create(url)).build();
        return requestSender.sendRequest(client, request);
    }

	public JsonNode obterDadosAPI(String busca, String fonte) {
		HttpResponse<String> response = sendRequest(busca, fonte);
//		NewsPropertiesDTO newsPropertiesDTO = conversor.setGenericDTO(response, NewsPropertiesDTO.class);
		return jsonConverter.convertToJson(response);
	}

	public Page<NewsItemDTO> listar(Pageable paginacao, String busca, String fonte) {
		HttpResponse<String> response = sendRequest(busca, fonte);
		NewsPropertiesDTO newsPropertiesDTO = conversor.setGenericDTO(response, NewsPropertiesDTO.class);
		List<NewsItemDTO> newsItemList = newsPropertiesDTO.news();
		return new PageImpl<>(newsItemList, paginacao, newsItemList.size());
	}
}
