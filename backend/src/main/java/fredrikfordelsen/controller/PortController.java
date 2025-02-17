package fredrikfordelsen.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class PortController {
    @Value("${local.server.port}")
    private int serverPort;

    @GetMapping("/port")
    public Map <String, Integer> getPort() {
        return Map.of("port", serverPort);
    }
}
