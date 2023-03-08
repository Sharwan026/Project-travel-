package com.example.demo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class LocService {
	@Autowired
	LocRepository repository;

	public Optional<model> getTasks(int id){
		return repository.findById( id);
	}
	public String updatemodel(model d) {
		repository.save( d);
		return "updated";
	}
	public String deletemodel(int id) {
		repository.deleteById( id);
		return "ID DELETED";
	}
}
