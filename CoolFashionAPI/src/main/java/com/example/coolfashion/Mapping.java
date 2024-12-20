package com.example.coolfashion;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Mapping {

    @GetMapping("/index.html")
    public String getHomePage(){
        return "index";
    }

    @GetMapping("/contactUs.html")
    public String getContactForm(){
        return "contactUs";
    }

    @GetMapping("/secondHand.html")
    public String getSecondHand() {
        return "secondHand";
    }

    @GetMapping("/added_products.html")
    public String getAddedProduct() {
        return "added_products";
    }

    @GetMapping("/admin_frontpage.html")
    public String getAdminFrontpage() {
        return "admin_frontpage";
    }

    @GetMapping("/adminAddCategory.html")
    public String getAdminAddCategory() {
        return "adminAddCategory";
    }

    @GetMapping("/create_new_product_in_category.html")
    public String getCreateNewProductInCategory() {
        return "create_new_product_in_category";
    }

    @GetMapping("/create_product.html")
    public String createProduct() {
        return "create_product";
    }

    @GetMapping("/edit_product.html")
    public String editProduct() {
        return "edit_product";
    }

    @GetMapping("/login.html")
    public String login() {
        return "login";
    }

    @GetMapping("/messages.html")
    public String messages() {
        return "messages";
    }

    @GetMapping("/admin_ten_latest.html")
    public String adminTenLatest() {
        return "admin_ten_latest";
    }
}
