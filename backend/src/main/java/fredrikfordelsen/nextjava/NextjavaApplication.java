package fredrikfordelsen.nextjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(scanBasePackages = "fredrikfordelsen")
@EntityScan("fredrikfordelsen.model")
@EnableJpaRepositories("fredrikfordelsen.repository")
@ComponentScan("fredrikfordelsen")
public class NextjavaApplication {
    public static void main(String[] args) {
        SpringApplication.run(NextjavaApplication.class, args);
    }
}
