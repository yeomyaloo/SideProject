package com.jojoldu.book.springboot;
//앞으로 만들 메인 클래스가 된다

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.
        SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringBootApplication.run(Application.class, args);
    }
}
