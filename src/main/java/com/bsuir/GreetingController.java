package com.bsuir;


import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.*;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/greet")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }

    @PostMapping("/greeting")
    public Greeting greetingName(@RequestBody Greeting greet) {
        return new Greeting(counter.incrementAndGet(), String.format(template, greet.getContent()));
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/hello/{name}")
    public String sayHello(@PathVariable String name){
        return "Ну привет, "+ name;
    }
}