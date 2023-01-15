package com.networksecurity.netsec.repository;

import java.util.Optional;

import com.networksecurity.netsec.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author George Karampelas
 */

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String email);

}