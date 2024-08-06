package com.example.demo.service;

import com.example.demo.model.TaskAssignment;
import com.example.demo.repository.TaskAssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskAssignmentService {

    @Autowired
    private TaskAssignmentRepository taskAssignmentRepository;

    public TaskAssignment saveTaskAssignment(TaskAssignment taskAssignment) {
        return taskAssignmentRepository.save(taskAssignment);
    }

    public TaskAssignment getTaskAssignmentById(Long id) {
        return taskAssignmentRepository.findById(id).orElse(null);
    }

    public List<TaskAssignment> getAllTaskAssignments() {
        return taskAssignmentRepository.findAll();
    }

    public void deleteTaskAssignment(Long id) {
        taskAssignmentRepository.deleteById(id);
    }
}
