package com.ecommerce.repositary;  

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ecommerce.dto.AdminInformation;

@Repository
public interface AdminRepository extends JpaRepository<AdminInformation, Integer> {
    Optional<AdminInformation> findByEmailid(String emailid);
}