package com.example.repository;

import com.example.entity.Auteur;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AuteurRepository extends JpaRepository<Auteur, Long> {

    // Trouver un auteur par nom
    Optional<Auteur> findByNom(String nom);
}
