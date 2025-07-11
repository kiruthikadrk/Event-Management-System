package com.example.demo.modal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "luminas")
public class Luminas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ✅ use IDENTITY for auto-increment in MySQL
    private Long id; // ✅ use wrapper class (Long), not primitive long

    @Column(name = "name")
    private String name;

    @Column(name = "phone_number")
    private String phoneNumber; // ✅ use String to avoid loss of leading zeros or number limit issues

    @Column(name = "email")
    private String email;

    @Column(name = "date_of_function")
    private String dateOfFunction;

    @Column(name = "function_type")
    private String functionType;

    @Column(name = "number_of_guests")
    private int numberOfGuests;

    @Column(name = "number_of_rooms")
    private int numberOfRooms;

    public Luminas() {}

    public Luminas(String name, String phoneNumber, String email, String dateOfFunction,
                   String functionType, int numberOfGuests, int numberOfRooms) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.dateOfFunction = dateOfFunction;
        this.functionType = functionType;
        this.numberOfGuests = numberOfGuests;
        this.numberOfRooms = numberOfRooms;
    }

    public Long getId() {
        return id;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getDateOfFunction() { return dateOfFunction; }
    public void setDateOfFunction(String dateOfFunction) { this.dateOfFunction = dateOfFunction; }

    public String getFunctionType() { return functionType; }
    public void setFunctionType(String functionType) { this.functionType = functionType; }

    public int getNumberOfGuests() { return numberOfGuests; }
    public void setNumberOfGuests(int numberOfGuests) { this.numberOfGuests = numberOfGuests; }

    public int getNumberOfRooms() { return numberOfRooms; }
    public void setNumberOfRooms(int numberOfRooms) { this.numberOfRooms = numberOfRooms; }

    @Override
    public String toString() {
        return "Luminas{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", dateOfFunction='" + dateOfFunction + '\'' +
                ", functionType='" + functionType + '\'' +
                ", numberOfGuests=" + numberOfGuests +
                ", numberOfRooms=" + numberOfRooms +
                '}';
    }
}