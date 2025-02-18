package fredrikfordelsen.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PortController {

    @Value("${server.port}")
    private int serverPort;

    @GetMapping("/port")
    public int getBackendPort() {
        return serverPort;  // Returner porten som Spring Boot har valgt
    }
}
