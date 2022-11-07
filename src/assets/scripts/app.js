(function(){
    var app = angular.module("HelloWorld", []);
    app.controller("TextField", textDetection);
    app.controller("GreetController", function(){
        this.greetMessage = "Start Learning Today!";
        this.greetWorld = greetWorld();
        this.student = student;
    });
    var student = {};
    student.name = "John";
    student.subject = "Doe";
    function greetWorld(){
        console.log("Hello World!");
    }
    function textDetection(){
        console.log("Text fields recognised!");
    }
})();