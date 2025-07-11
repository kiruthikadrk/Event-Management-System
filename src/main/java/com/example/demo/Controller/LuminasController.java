package com.example.demo.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modal.Luminas;
import com.example.demo.repository.LuminasRepository;

@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/api")
public class LuminasController {

    @Autowired
    LuminasRepository luminasRepository;

    // ✅ Create Luminas (POST)
    @PostMapping("/luminas")
    public ResponseEntity<?> createLuminas(@RequestBody Luminas luminas) {
        try {
            Luminas savedLuminas = luminasRepository.save(luminas);
            return new ResponseEntity<>(savedLuminas, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error creating record: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ✅ Get Luminas by ID (GET)
    @GetMapping("/luminas/{id}")
    public ResponseEntity<Luminas> getLuminasById(@PathVariable("id") long id) {
        Optional<Luminas> luminasData = luminasRepository.findById(id);
        if (luminasData.isPresent()) {
            return new ResponseEntity<>(luminasData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // ✅ Update Luminas (PUT)
    @PutMapping("/luminas/{id}")
    public ResponseEntity<?> updateLuminas(@PathVariable("id") long id, @RequestBody Luminas updatedLuminas) {
        try {
            Optional<Luminas> luminasData = luminasRepository.findById(id);
            if (luminasData.isPresent()) {
                Luminas luminas = luminasData.get();
                luminas.setName(updatedLuminas.getName());
                luminas.setEmail(updatedLuminas.getEmail());
                luminas.setFunctionType(updatedLuminas.getFunctionType());
                luminas.setNumberOfGuests(updatedLuminas.getNumberOfGuests());
                luminas.setNumberOfRooms(updatedLuminas.getNumberOfRooms());
                luminas.setDateOfFunction(updatedLuminas.getDateOfFunction());

                Luminas saved = luminasRepository.save(luminas);
                return new ResponseEntity<>(saved, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Luminas record not found with ID: " + id, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Error updating record: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ✅ Delete by ID (DELETE)
    @DeleteMapping("/luminas/{id}")
    public ResponseEntity<?> deleteLuminas(@PathVariable("id") long id) {
        try {
            if (!luminasRepository.existsById(id)) {
                return new ResponseEntity<>("Record not found with ID: " + id, HttpStatus.NOT_FOUND);
            }
            luminasRepository.deleteById(id);
            return new ResponseEntity<>("Deleted successfully", HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>("Error deleting record: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ✅ Delete All
    @DeleteMapping("/deleteluminas")
    public ResponseEntity<HttpStatus> deleteAllLuminas() {
        try {
            luminasRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
@GetMapping("/luminas")
public ResponseEntity<List<Luminas>> getAllLuminas(@RequestParam(required = false) String name) {
    try {
        List<Luminas> luminasList = new ArrayList<>();

        // ✅ This was commented out — Uncomment and use this:
        if (name == null) {
            luminasRepository.findAll().forEach(luminasList::add);
        } else {
            luminasRepository.findByNameContaining(name).forEach(luminasList::add);
        }

        return new ResponseEntity<>(luminasList, HttpStatus.OK);
    } catch (Exception e) {
        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

}