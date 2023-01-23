package com.netsec.security.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author George Karampelas
 */
@Controller
public class WebController {

    @RequestMapping("/")
    public String index()
    {
        return "login.html";
    }

    @RequestMapping("/login.js")
    public String js() {
        return "/login.js";
    }

}
