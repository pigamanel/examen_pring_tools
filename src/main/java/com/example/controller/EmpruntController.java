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

    @GetMapping("ListeEmprunt")
    public List<Emprunt> getAllEmprunts() {
        return empruntService.getAllEmprunts();
    }


    @GetMapping("/recupere/{id}")
    public Emprunt getEmpruntById(@PathVariable Long id) {
        return empruntService.getEmpruntById(id);
    }

    @PostMapping("/addemprunt")
    public Emprunt addEmprunt(@RequestBody Emprunt emprunt) {
        return empruntService.addEmprunt(emprunt);
    }

    @PutMapping("/updateEmprunt/{id}")
    public Emprunt updateEmprunt(@PathVariable Long id, @RequestBody Emprunt emprunt) {
        return empruntService.updateEmprunt(id, emprunt);
    }

    @DeleteMapping("/suprimer/{id}")
    public void deleteEmprunt(@PathVariable Long id) {
        empruntService.deleteEmprunt(id);
    }
}
