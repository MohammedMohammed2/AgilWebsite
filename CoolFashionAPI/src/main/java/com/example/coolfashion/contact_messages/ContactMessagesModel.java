package com.example.coolfashion.contact_messages;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity(name = "contact_messages")
@Table(name = "contact_messages")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ContactMessagesModel {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "message")
    private String message;

    @Column(name = "title")
    private String name;

    @Column(name = "email")
    private String email;
}