package br.com.springnewsletter.DTO;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record NewsPropertiesDTO (List<NewsItemDTO> news) {
	
}
