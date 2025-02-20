package fredrikfordelsen.nextjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "fredrikfordelsen") 
@EnableJpaRepositories(basePackages = "fredrikfordelsen.repository")
public class NextjavaApplication {
    public static void main(String[] args) {
        SpringApplication.run(NextjavaApplication.class, args);
    }
}
