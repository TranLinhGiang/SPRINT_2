package com.example.spotifybackend.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "account")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String username;
    private String password;
    @ManyToOne
    @JoinColumn(name = "id_role")
    private Role role;
    @OneToOne
    @JoinColumn(name = "id_customer")
    private Customer customer;

    @OneToOne
    @JoinColumn(name = "id_bill")
    private Bill bill;

    public Account() {
    }

    public Account(Integer id, String username, String password, Role role, Customer customer, Bill bill) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.customer = customer;
        this.bill = bill;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Bill getBill() {
        return bill;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }
}
