package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class model {
	@Id
	private int Id;
	private String Locations;
	private String Spots_to_View;
	private String Near_by_hotels;
	
	public model(int id, String locations, String spots_to_View, String near_by_hotels) {
		super();
		Id = id;
		Locations = locations;
		Spots_to_View = spots_to_View;
		Near_by_hotels = near_by_hotels;
	}

	public model() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getLocations() {
		return Locations;
	}

	public void setLocations(String locations) {
		Locations = locations;
	}

	public String getSpots_to_View() {
		return Spots_to_View;
	}

	public void setSpots_to_View(String spots_to_View) {
		Spots_to_View = spots_to_View;
	}

	public String getNear_by_hotels() {
		return Near_by_hotels;
	}

	public void setNear_by_hotels(String near_by_hotels) {
		Near_by_hotels = near_by_hotels;
	}

}
