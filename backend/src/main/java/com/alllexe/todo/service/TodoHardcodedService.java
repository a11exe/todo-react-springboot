package com.alllexe.todo.service;


import com.alllexe.todo.exceptions.TodoNotFoundException;
import com.alllexe.todo.model.Todo;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class TodoHardcodedService implements TodoService {

    private final List<Todo> todos = Arrays.stream( new Todo[]{
            new Todo(1, "alabra", "Learn to Dance 2", new Date(), false),
            new Todo(2, "alabra", "Learn about Microservices 2", new Date(), false),
            new Todo(3, "alabra", "Learn about Angular", new Date(), false)
    }).collect(Collectors.toList());

    @Override
    public List<Todo> findAllByUsername(String username) {
        return todos.stream()
                .filter(todo -> username.equals(todo.getUsername()))
                .collect(Collectors.toList());
    }

    @Override
    public Todo delete(String username, long id) {
        Todo todo = todos.stream()
                .filter(t -> (id == t.getId()) && username.equals(t.getUsername()))
                .findAny()
                .orElseThrow(TodoNotFoundException::new);
        if (todos.remove(todo)) {
            return todo;
        } else {
            return null;
        }
    }
}
