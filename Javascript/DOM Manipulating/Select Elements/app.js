// Elementi Id'e göre seçme

let element;

element = document.getElementById("todo-form");
element = document.getElementById("button");

// Element Class'a göre seçme

element = document.getElementsByClassName("mt-3");
element = document.getElementsByClassName("mt-3")[0];
element = document.getElementsByClassName("mt-3")[1];

// Element Tag2e Göre Seçme

element = document.getElementsByTagName("div");

// Query Selector - CSS Selector - Tek elementi seçer

element = document.querySelector("#todo-form");
element = document.querySelector(".container");
element = document.querySelector("div");

// QuerySelectorAll - Tüm elementleri seç

element = document.querySelectorAll("#todo-form");
element = document.querySelectorAll(".container");
element = document.querySelectorAll("div");

element.forEach(function(el){
	console.log(el);
})

console.log(element);