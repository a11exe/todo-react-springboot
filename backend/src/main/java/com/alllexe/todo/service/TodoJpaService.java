package com.alllexe.todo.service;


import com.alllexe.todo.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoJpaService extends JpaRepository<Todo, Long> {

    Todo findAllByUsernameAndId(String username, Long id);

    List<Todo> findAllByUsername(String username);
}
