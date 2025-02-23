package fredrikfordelsen.controller;

import fredrikfordelsen.model.Project;
import fredrikfordelsen.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService ProjectService;

    @Autowired
    public ProjectController(ProjectService ProjectService) {
        this.ProjectService = ProjectService;
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return ProjectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public Optional<Project> getProjectById(@PathVariable Long id) {
        return ProjectService.getProjectById(id);
    }

    @PostMapping
    public Project createProject(@RequestBody Project Project) {
        return ProjectService.saveProject(Project);
    }

    @PutMapping("/{id}")
    public Project updateProject(@PathVariable Long id, @RequestBody Project Project) {
        return ProjectService.updateProject(id, Project);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        ProjectService.deleteProject(id);
    }
}
