package fredrikfordelsen.controller;

import fredrikfordelsen.model.Message;
import fredrikfordelsen.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // Tillater forespørsler fra frontend
@RestController
@RequestMapping("/api/messages") // Base-URL for API-et
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;

    // Lagre en ny melding
    @PostMapping
    public Message saveMessage(@RequestBody Message message) {
        return messageRepository.save(message); // Lagrer meldingen i databasen
    }

    // Hent alle meldinger (f.eks. for admin)
    @GetMapping
    public List<Message> getMessages() {
        return messageRepository.findAll();
    }
}
