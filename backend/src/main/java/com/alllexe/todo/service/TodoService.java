package com.alllexe.todo.service;


import com.alllexe.todo.model.Todo;

import java.util.List;

public interface TodoService {

    List<Todo> findAllByUsername(String username);

    Todo delete(String username, long id);

    Todo findAllByUsernameAndId(String username, long id);

    Todo save(Todo todo);
}
