package com.example.entity;

import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity

public class Emprunt {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Long livreId;
    private Long utilisateurId;
    private Date dateEmprunt;
    private Date dateRetour;
    
	public Emprunt() {
		super();
	}
	
	public Emprunt(Long livreId, Long utilisateurId, Date dateEmprunt, Date dateRetour) {
		super();
		this.livreId = livreId;
		this.utilisateurId = utilisateurId;
		this.dateEmprunt = dateEmprunt;
		this.dateRetour = dateRetour;
	}
	

	public Emprunt(Long id, Long livreId, Long utilisateurId, Date dateEmprunt, Date dateRetour) {
		super();
		this.id = id;
		this.livreId = livreId;
		this.utilisateurId = utilisateurId;
		this.dateEmprunt = dateEmprunt;
		this.dateRetour = dateRetour;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getLivreId() {
		return livreId;
	}
	public void setLivreId(Long livreId) {
		this.livreId = livreId;
	}
	public Long getUtilisateurId() {
		return utilisateurId;
	}
	public void setUtilisateurId(Long utilisateurId) {
		this.utilisateurId = utilisateurId;
	}
	public Date getDateEmprunt() {
		return dateEmprunt;
	}
	public void setDateEmprunt(Date dateEmprunt) {
		this.dateEmprunt = dateEmprunt;
	}
	public Date getDateRetour() {
		return dateRetour;
	}
	public void setDateRetour(Date dateRetour) {
		this.dateRetour = dateRetour;
	}



  
}