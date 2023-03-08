package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class LocController {
	@Autowired
	 LocRepository serviceRepository;
	@Autowired
	LocService service;
	@GetMapping("/get")
	List<model> getList(){
		return serviceRepository.findAll();
	}
	@PostMapping("/post")
	public model create (@RequestBody model d) {
		return serviceRepository.save( d);
	}
	@GetMapping("/getvalues/{id}")
	public Optional<model> getByid(@PathVariable int id){
		return service.getTasks(id);
	}
	@PutMapping("/update")
	public String update(@RequestBody model d) {
		return service.updatemodel(d);
	}
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id) {
		return service.deletemodel(id);
	}
}
