package com.example.demo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.modal.Luminas;

public interface LuminasRepository extends JpaRepository<Luminas, Long> {

    // 🔍 This enables optional filtering by name in your controller
    List<Luminas> findByNameContaining(String name);
}
