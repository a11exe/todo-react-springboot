package com.alllexe.todo.controller;

import com.alllexe.todo.model.Todo;
import com.alllexe.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        //Thread.sleep(3000);
        return todoService.findAllByUsername(username);
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        return todoService.delete(username, id) != null ?
                ResponseEntity.ok().build() : ResponseEntity.noContent().build();
    }

}
