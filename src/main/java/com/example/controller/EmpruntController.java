package com.example.controller;


import com.example.entity.Emprunt;
import com.example.service.EmpruntService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/emprunts")
public class EmpruntController {

    @Autowired
    private EmpruntService empruntService;

    // Endpoint pour récupérer tous les emprunts
    @GetMapping
    public List<Emprunt> getAllEmprunts() {
        return empruntService.getAllEmprunts();
    }

    // Endpoint pour récupérer un emprunt par son ID
    @GetMapping("/{id}")
    public Emprunt getEmpruntById(@PathVariable Long id) {
        return empruntService.getEmpruntById(id);
    }

    // Endpoint pour ajouter un nouvel emprunt
    @PostMapping
    public Emprunt addEmprunt(@RequestBody Emprunt emprunt) {
        return empruntService.addEmprunt(emprunt);
    }

    // Endpoint pour mettre à jour un emprunt existant
    @PutMapping("/{id}")
    public Emprunt updateEmprunt(@PathVariable Long id, @RequestBody Emprunt emprunt) {
        return empruntService.updateEmprunt(id, emprunt);
    }

    // Endpoint pour supprimer un emprunt par son ID
    @DeleteMapping("/{id}")
    public void deleteEmprunt(@PathVariable Long id) {
        empruntService.deleteEmprunt(id);
    }
}
