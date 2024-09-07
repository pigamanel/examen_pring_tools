package com.example.service;

import com.example.entity.Livre;
import com.example.repository.LivreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import java.util.List;

@Service
public class LivreService {
    @Autowired
    private LivreRepository livreRepository;

    public List<Livre> getAllLivres() {
        return livreRepository.findAll();
    }

    public Livre addLivre(Livre livre) {
        return livreRepository.save(livre);
    }

    public Livre updateLivre(Long id, Livre livreDetails) {
        Livre livre = livreRepository.findById(id).orElseThrow();
        livre.setTitre(livreDetails.getTitre());
        livre.setAuteur(livreDetails.getAuteur());
        livre.setDatePublication(livreDetails.getDatePublication());
        livre.setIsbn(livreDetails.getIsbn());
        livre.setGenre(livreDetails.getGenre());
        return livreRepository.save(livre);
    }

    public void deleteLivre(Long id) {
        livreRepository.deleteById(id);
    }
}
