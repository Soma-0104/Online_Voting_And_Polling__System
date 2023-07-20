package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity

public class Candidate {
	@Id
//	@GeneratedValue(strategy = Gene)
	private int id;
	private String name;
	private String dob;
	private String gender;
	private String dept;
	private String position;
	private String partyName;
	private String candidate_id;
	private String password;
	
	@ManyToOne(fetch = FetchType.LAZY ,cascade=CascadeType.ALL)
	private Admin admin;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Voter voter;

}