package com.netsec.security;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author George Karampelas
 */

@Controller("/")
public class controller {

    @GetMapping("index")
    String index() {
        return "index";
    }


}
