package com.networksecurity.netsec.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

/**
 * @author George Karampelas
 */

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "logging")
public class Logging {

    @Id
    @GeneratedValue
    private Integer id;
    private String username;
    private Integer attempts;
    @CreationTimestamp
    private Timestamp timestamp;


}
