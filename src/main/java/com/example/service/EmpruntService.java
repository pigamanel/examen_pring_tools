package com.example.service;

import com.example.entity.Emprunt;
import com.example.repository.EmpruntRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpruntService {

    @Autowired
    private EmpruntRepository empruntRepository;

    public List<Emprunt> getAllEmprunts() {
        return empruntRepository.findAll();
    }

    public Emprunt getEmpruntById(Long id) {
        Optional<Emprunt> emprunt = empruntRepository.findById(id);
        return emprunt.orElse(null);
    }

    public Emprunt addEmprunt(Emprunt emprunt) {
        return empruntRepository.save(emprunt);
    }

    public Emprunt updateEmprunt(Long id, Emprunt emprunt) {
        if (empruntRepository.existsById(id)) {
            emprunt.setId(id);
            return empruntRepository.save(emprunt);
        }
        return null;
    }

    public void deleteEmprunt(Long id) {
        empruntRepository.deleteById(id);
    }
}
