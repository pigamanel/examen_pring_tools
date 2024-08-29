package com.example.repository;

import com.example.entity.Emprunt;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;

public interface EmpruntRepository extends JpaRepository<Emprunt, Long> {

    // Trouver des emprunts par l'ID de l'utilisateur
    List<Emprunt> findByUtilisateurId(Long utilisateurId);

    // Trouver des emprunts par plage de dates d'emprunt
    List<Emprunt> findByDateEmpruntBetween(LocalDate startDate, LocalDate endDate);
}
