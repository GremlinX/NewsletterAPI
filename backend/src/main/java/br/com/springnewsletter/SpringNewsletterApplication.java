package br.com.springnewsletter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.springnewsletter.service.ConsumoAPI;

@SpringBootApplication
public class SpringNewsletterApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringNewsletterApplication.class, args);
	}
}
