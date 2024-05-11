package com.example.spotifybackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "bill")
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String codeBill;

    private double price;

    public Bill() {
    }

    public Bill(Integer id, String codeBill, double price) {
        this.id = id;
        this.codeBill = codeBill;
        this.price = price;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCodeBill() {
        return codeBill;
    }

    public void setCodeBill(String codeBill) {
        this.codeBill = codeBill;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

}
