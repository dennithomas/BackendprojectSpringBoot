package com.ecommerce.repositary;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ecommerce.dto.UserInformation;

@Repository
public interface UserRepository extends JpaRepository<UserInformation, Integer> {

    Optional<UserInformation> findByEmailid(String emailid);
}
