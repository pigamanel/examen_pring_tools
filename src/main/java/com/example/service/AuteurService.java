package com.example.service;

import com.example.entity.Auteur;
import com.example.repository.AuteurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuteurService {
    @Autowired
    private AuteurRepository auteurRepository;

    public List<Auteur> getAllAuteurs() {
        return auteurRepository.findAll();
    }

    public Auteur addAuteur(Auteur auteur) {
        return auteurRepository.save(auteur);
    }

    public Auteur updateAuteur(Long id, Auteur auteurDetails) {
        Auteur auteur = auteurRepository.findById(id).orElseThrow();
        auteur.setNom(auteurDetails.getNom());
        auteur.setDateNaissance(auteurDetails.getDateNaissance());
        auteur.setNationalite(auteurDetails.getNationalite());
        return auteurRepository.save(auteur);
    }

    public void deleteAuteur(Long id) {
        auteurRepository.deleteById(id);
    }
}