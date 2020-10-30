package com.alllexe.todo.controller;

import com.alllexe.todo.model.AuthBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
public class AuthController {

    @GetMapping("/basicauth")
    public AuthBean basicAuth() {
        return new AuthBean("You are authenticated");
    }

}
