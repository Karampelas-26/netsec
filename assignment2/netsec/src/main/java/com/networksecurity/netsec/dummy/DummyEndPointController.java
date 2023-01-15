package com.networksecurity.netsec.dummy;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author George Karampelas
 */
@RestController
@RequestMapping("/dummy-end-point")
public class DummyEndPointController {

    @GetMapping
    public ResponseEntity<String> dummyEndPoint() {
        return ResponseEntity.ok("Hello from the dummy end-point!");
    }
}
