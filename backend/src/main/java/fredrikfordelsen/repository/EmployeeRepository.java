package fredrikfordelsen.repository;

import fredrikfordelsen.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // Du kan legge til tilpassede metoder her om nødvendig
}
