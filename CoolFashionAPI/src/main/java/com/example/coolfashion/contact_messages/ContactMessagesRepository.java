package com.example.coolfashion.contact_messages;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Change Long to whatever datatype your id is in CategoriesModel
public interface ContactMessagesRepository extends JpaRepository<ContactMessagesModel, Long> {
}