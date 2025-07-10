package com.hp.com.watchstore.controller;

import com.hp.com.watchstore.model.Product;
import com.hp.com.watchstore.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/watches")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts(){
        System.out.println("hello");
        return productRepository.findAll();
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProductById(@PathVariable String id) {
        Optional<Product> product = productRepository.findById(id);

        if(product.isPresent()){
            productRepository.deleteById(id);
            return ResponseEntity.ok().body("Deleted.");
        }
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No product found with id: " + id);
        }
    }
    @DeleteMapping("/name/{name}")
    public ResponseEntity<String> deleteProductByName(@PathVariable String name) {
        boolean exists = productRepository.existsByName(name);

        if (exists) {
            long deletedCount = productRepository.deleteByName(name);
            return ResponseEntity.ok("Deleted " + deletedCount + " product(s) with name: " + name);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No product found with name: " + name);
        }
    }

    @DeleteMapping("/all")
    public ResponseEntity<String> deleteAllProducts() {
        productRepository.deleteAll();
        return ResponseEntity.ok("All products have been deleted.");
    }

}
