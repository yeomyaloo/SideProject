package com.jojoldu.book.springboot.web;
//간단한 API 만들기


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.
        RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }

}
