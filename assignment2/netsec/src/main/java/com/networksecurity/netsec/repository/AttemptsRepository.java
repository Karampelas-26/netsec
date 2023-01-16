package com.networksecurity.netsec.repository;

import com.networksecurity.netsec.model.Logging;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @author George Karampelas
 */
public interface AttemptsRepository  extends JpaRepository<Logging, String> {

    Optional<Logging> findLoggingByUsername(String username);

}
