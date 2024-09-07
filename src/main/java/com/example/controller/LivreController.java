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

    @GetMapping("/listeLivre")
    public List<Livre> getAllLivres() {
        return livreService.getAllLivres();
    }

    @PostMapping("/addLivre")
    public Livre addLivre(@RequestBody Livre livre) {
        return livreService.addLivre(livre);
    }

    @PutMapping("/{id}/update")
    public Livre updateLivre(@PathVariable Long id, @RequestBody Livre livreDetails) {
        // Récupérer le livre existant par son ID
        Livre existingLivre = livreService.getLivreById(id);

        // Mettre à jour les champs du livre avec les nouvelles valeurs
        existingLivre.setTitre(livreDetails.getTitre());
        existingLivre.setAuteur(livreDetails.getAuteur());
        existingLivre.setDatePublication(livreDetails.getDatePublication());
        existingLivre.setIsbn(livreDetails.getIsbn());
        existingLivre.setGenre(livreDetails.getGenre());

        // Sauvegarder le livre mis à jour
        return livreService.updateLivre(existingLivre);
    }

    @DeleteMapping("/{id}/delete")
    public void deleteLivre(@PathVariable Long id) {
        livreService.deleteLivre(id);
    }

    @GetMapping("/{id}")
    public Livre getLivreById(@PathVariable Long id) {
        return livreService.getLivreById(id);
    }
}
