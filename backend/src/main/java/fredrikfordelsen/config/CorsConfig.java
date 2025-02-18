package fredrikfordelsen.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Allows requests to all API endpoints
        .allowedOrigins("http://localhost:3000") // Allow Next frontend on port 3000
        .allowedMethods("GET", "SET", "PUT", "DELETE") // Which HTTP methods that are allowed
        .allowedHeaders("*") // Allowing all headers
        .allowedCredentials(true); // Allowing use of cookies and authentication
    }
}
