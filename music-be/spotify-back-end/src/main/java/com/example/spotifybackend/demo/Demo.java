package com.example.spotifybackend.demo;

import java.util.Scanner;

public class Demo {
    public static void main(String[] args) {
        String name;
        Double point;
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter name student: ");
        name = scanner.nextLine();
        System.out.println("Enter point student: ");
        point = scanner.nextDouble();

        System.out.println("< Tên sinh viên > : " + name + " , < Điểm sinh viên >: " + point);

    }
}
