package com.example.repository;

import com.example.entity.Livre;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface LivreRepository extends JpaRepository<Livre, Long> {

    Optional<Livre> findByTitre(String titre);

    Optional<Livre> findByAuteur(String auteur);

    List<Livre> findByDatePublicationBetween(LocalDate debut, LocalDate fin);
}
