package com.hp.com.watchstore.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "watches")  // MongoDB collection name
@Data                     // generates getters, setters, toString, equals, hashCode
@NoArgsConstructor        // generates a no-arg constructor
@AllArgsConstructor       // generates a constructor with all fields
public class Product {
    @Id
    private String id;
    private String name;
    private String brand;
    private String description;
    private double price;
    private String imageUrl;
    private boolean inStock;

}
