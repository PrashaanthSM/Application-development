package com.example.demo.controller;


import com.example.demo.model.TaskAssignment;
import com.example.demo.service.TaskAssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/taskAssignments")
public class TaskAssignmentController {

    @Autowired
    private TaskAssignmentService taskAssignmentService;

    @PostMapping
    public ResponseEntity<TaskAssignment> createTaskAssignment(@RequestBody TaskAssignment taskAssignment) {
        return ResponseEntity.ok(taskAssignmentService.saveTaskAssignment(taskAssignment));
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskAssignment> getTaskAssignmentById(@PathVariable Long id) {
        Optional<TaskAssignment> taskAssignment = taskAssignmentService.findTaskAssignmentById(id);
        return taskAssignment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<TaskAssignment>> getAllTaskAssignments() {
        return ResponseEntity.ok(taskAssignmentService.findAllTaskAssignments());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTaskAssignment(@PathVariable Long id) {
        taskAssignmentService.deleteTaskAssignment(id);
        return ResponseEntity.noContent().build();
    }
}

