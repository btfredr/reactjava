package fredrikfordelsen.service;

import fredrikfordelsen.model.Project;
import fredrikfordelsen.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private final ProjectRepository ProjectRepository;

    @Autowired
    public ProjectService(ProjectRepository ProjectRepository) {
        this.ProjectRepository = ProjectRepository;
    }

    public List<Project> getAllProjects() {
        return ProjectRepository.findAll();
    }

    public Optional<Project> getProjectById(Long id) {
        return ProjectRepository.findById(id);
    }

    public Project saveProject(Project Project) {
        return ProjectRepository.save(Project);
    }

    public Project updateProject(Long id, Project Project) {
        if (ProjectRepository.existsById(id)) {
            Project.setId(id);
            return ProjectRepository.save(Project);
        }
        throw new RuntimeException("Project not found");
    }

    public void deleteProject(Long id) {
        ProjectRepository.deleteById(id);
    }
}
