package com.alllexe.todo.controller;

import com.alllexe.todo.model.Todo;
import com.alllexe.todo.service.TodoJpaService;
import com.alllexe.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoJpaController {

    @Autowired
    private TodoJpaService todoService;

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        //Thread.sleep(3000);
        return todoService.findAllByUsername(username);
    }

    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable Long id){
        return todoService.findAllByUsernameAndId(username, id);
    }

    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoService.findAllByUsernameAndId(username, id);
        if (todo != null) {
            todoService.delete(todo);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @PutMapping(value = "/jpa/users/{username}/todos/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateTodo(@PathVariable String username,
                                           @PathVariable long id,
                                           @RequestBody Todo todo) {
        Todo todoForUpdate = todoService.findAllByUsernameAndId(username, id);
        if (todo.getId() == id && todo.getUsername().equals(username)) {
            todoForUpdate.setDescription(todo.getDescription());
            todoForUpdate.setTargetDate(todo.getTargetDate());
            todoService.save(todoForUpdate);
            return ResponseEntity.ok(todoForUpdate);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping(value = "/jpa/users/{username}/todos", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateTodo(@PathVariable String username,
                                        @RequestBody Todo todo) {
        Todo todoForAdd = new Todo();
        todoForAdd.setUsername(username);
        todoForAdd.setDescription(todo.getDescription());
        todoForAdd.setTargetDate(todo.getTargetDate());
        Todo save = todoService.save(todoForAdd);
        return new ResponseEntity<>(todo, HttpStatus.OK);
    }

}
