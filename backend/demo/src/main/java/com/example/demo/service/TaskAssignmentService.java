package com.example.demo.service;



import com.example.demo.model.TaskAssignment;
import com.example.demo.repository.TaskAssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskAssignmentService {

    @Autowired
    private TaskAssignmentRepository taskAssignmentRepository;

    public TaskAssignment saveTaskAssignment(TaskAssignment taskAssignment) {
        return taskAssignmentRepository.save(taskAssignment);
    }

    public Optional<TaskAssignment> findTaskAssignmentById(Long id) {
        return taskAssignmentRepository.findById(id);
    }

    public List<TaskAssignment> findAllTaskAssignments() {
        return taskAssignmentRepository.findAll();
    }

    public void deleteTaskAssignment(Long id) {
        taskAssignmentRepository.deleteById(id);
    }
}

