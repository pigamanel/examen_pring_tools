package com.example.controller;



import com.example.entity.Auteur;
import com.example.service.AuteurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auteurs")
public class AuteurController {
    @Autowired
    private AuteurService auteurService;

    @GetMapping
    public List<Auteur> getAllAuteurs() {
        return auteurService.getAllAuteurs();
    }

    @PostMapping
    public Auteur addAuteur(@RequestBody Auteur auteur) {
        return auteurService.addAuteur(auteur);
    }

    @PutMapping("/{id}")
    public Auteur updateAuteur(@PathVariable Long id, @RequestBody Auteur auteurDetails) {
        return auteurService.updateAuteur(id, auteurDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteAuteur(@PathVariable Long id) {
        auteurService.deleteAuteur(id);
    }
}
