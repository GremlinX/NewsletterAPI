package br.com.springnewsletter.DTO;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record NewsItemDTO(
        long id,
        String title,
        String text,
        String summary,
        String url,
        String image,
        String publish_date, // Mudar o tipo para LocalDateTime
        List<String> authors,
        String language,
        String source_country,
        double sentiment
){}
