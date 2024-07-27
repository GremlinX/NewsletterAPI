package br.com.springnewsletter.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;

import br.com.springnewsletter.DTO.NewsItemDTO;
import br.com.springnewsletter.service.ConsumoAPI;

@RestController
@RequestMapping("/api")
public class WorldNewsAPIController {

	private ConsumoAPI api = new ConsumoAPI();

	@GetMapping("/{busca}")
	public JsonNode getNews(@PathVariable String busca) {
		return api.obterDadosAPI(busca, null);
	}

	@GetMapping("/{busca}/{fonte}")
	public JsonNode getNewsWithSource(@PathVariable String busca, @PathVariable String fonte) {
	    return api.obterDadosAPI(busca, fonte);
	}
	
	@GetMapping("/news/{busca}/{fonte}")
	public ResponseEntity<NewsItemDTO> obterItem(Pageable paginacao, @PathVariable String busca, @PathVariable String fonte, @RequestParam("page") int pagina) {
	    Page<NewsItemDTO> page = api.listar(paginacao, busca, fonte);
	    List<NewsItemDTO> content = page.getContent();
	    
	    if (pagina >= content.size() || pagina < 0) {
	        return ResponseEntity.notFound().build();
	    }

	    NewsItemDTO item = content.get(pagina);
	    return ResponseEntity.ok(item);
	}
}
