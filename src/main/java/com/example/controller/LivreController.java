package com.example.controller;


import com.example.entity.Livre;
import com.example.service.LivreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/livres")
public class LivreController {
    @Autowired
    private LivreService livreService;

    @GetMapping
    public List<Livre> getAllLivres() {
        return livreService.getAllLivres();
    }

    @PostMapping
    public Livre addLivre(@RequestBody Livre livre) {
        return livreService.addLivre(livre);
    }

    @PutMapping("/{id}")
    public Livre updateLivre(@PathVariable Long id, @RequestBody Livre livreDetails) {
        return livreService.updateLivre(id, livreDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteLivre(@PathVariable Long id) {
        livreService.deleteLivre(id);
    }
}
