package com.example.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Auteur {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nom;
    private LocalDate dateNaissance;
    private String nationalite;
    

    public Auteur() {
		super();
	}

	public Auteur(String nom, LocalDate dateNaissance, String nationalite) {
		super();
		this.nom = nom;
		this.dateNaissance = dateNaissance;
		this.nationalite = nationalite;
	}

	public Auteur(Long id, String nom, LocalDate dateNaissance, String nationalite) {
		super();
		this.id = id;
		this.nom = nom;
		this.dateNaissance = dateNaissance;
		this.nationalite = nationalite;
	}

	// Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public LocalDate getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(LocalDate dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getNationalite() {
        return nationalite;
    }

    public void setNationalite(String nationalite) {
        this.nationalite = nationalite;
    }
}