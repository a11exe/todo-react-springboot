package com.alllexe.todo.controller;

import com.alllexe.todo.model.Todo;
import com.alllexe.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id){
        return todoService.findAllByUsernameAndId(username, id);
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        return todoService.delete(username, id) != null ?
                ResponseEntity.ok().build() : ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/users/{username}/todos/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateTodo(@PathVariable String username,
                                           @PathVariable long id,
                                           @RequestBody Todo todo) {
        Todo todoForUpdate = todoService.findAllByUsernameAndId(username, id);
        if (todo.getId() == id && todo.getUsername().equals(username)) {
            todoForUpdate.setDescription(todo.getDescription());
            todoForUpdate.setTargetDate(todo.getTargetDate());
            return ResponseEntity.ok(todoForUpdate);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping(value = "/users/{username}/todos", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateTodo(@PathVariable String username,
                                        @RequestBody Todo todo) {
        return new ResponseEntity<>(todoService.save(todo), HttpStatus.OK);
    }

}
