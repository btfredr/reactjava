package fredrikfordelsen.service;

import fredrikfordelsen.model.Employee;
import fredrikfordelsen.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id); // Bruker findById fra JpaRepository
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll(); // Henter alle ansatte
    }

    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee); // Lagre en ansatt
    }

    public Employee updateEmployee(Long id, Employee employee) {
        if (employeeRepository.existsById(id)) {
            employee.setId(id);
            return employeeRepository.save(employee); // Oppdaterer eksisterende ansatt
        }
        throw new RuntimeException("Employee not found");
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id); // Sletter en ansatt
    }
}
