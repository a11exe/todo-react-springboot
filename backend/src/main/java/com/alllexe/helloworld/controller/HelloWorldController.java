package com.alllexe.helloworld.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {

    @GetMapping("/hello-world")
    public String helloWorld() {
        return "hello world";
    }

    @GetMapping("/hello-world-bean/{name}")
    public HelloWorldBean helloWorldBean(@PathVariable String name) {
//        throw new RuntimeException("Wrong");
        return new HelloWorldBean(String.format("Hello world, %s", name));
    }
}
