package br.com.springnewsletter.service;

public class URLBuilder {
	private final String BASE_URL = "https://api.worldnewsapi.com/search-news?api-key=";

	public String buildURL(String apiKey, String busca, String fonte) {
		busca = ajustaBusca(busca);
		StringBuilder urlBuilder = new StringBuilder(BASE_URL)
				.append(apiKey)
				.append("&text=")
				.append(busca)
				.append("&sort=publish-time")
				.append("&number=20")
				.append("&sort-direction=DESC");
		
		if (fonte != null && (!fonte.isEmpty() || fonte != null)) {
			urlBuilder.append("&news-sources=").append(fonte);
		}
		
		return urlBuilder.toString();
	}

	private String ajustaBusca(String busca) {
		return busca.replace(" ", "+").trim();
	}
}