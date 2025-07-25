package com.hp.com.watchstore.repository;

import com.hp.com.watchstore.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ProductRepository extends MongoRepository<Product, String> {
    long deleteByName(String name);

    boolean existsByName(String name);
}
