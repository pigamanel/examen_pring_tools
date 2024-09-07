package com.example.service;

import com.example.entity.Livre;
import com.example.repository.LivreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivreService {

    @Autowired
    private LivreRepository livreRepository;

    public List<Livre> getAllLivres() {
        return livreRepository.findAll();
    }

    public Livre getLivreById(Long id) {
        Optional<Livre> optionalLivre = livreRepository.findById(id);
        return optionalLivre.orElseThrow(() -> new RuntimeException("Livre non trouvé"));
    }

    public Livre addLivre(Livre livre) {
        return livreRepository.save(livre);
    }

    public Livre updateLivre(Long id, Livre livre) {
        Livre existingLivre = getLivreById(id);

        // Mise à jour des détails du livre
        existingLivre.setTitre(livre.getTitre());
        existingLivre.setAuteur(livre.getAuteur());
        existingLivre.setDatePublication(livre.getDatePublication());
        existingLivre.setIsbn(livre.getIsbn());
        existingLivre.setGenre(livre.getGenre());

        // Sauvegarde des modifications
        return livreRepository.save(existingLivre);
    }

    public void deleteLivre(Long id) {
        livreRepository.deleteById(id);
    }

	public Livre updateLivre(Livre existingLivre) {
		// TODO Auto-generated method stub
		return null;
	}
}
