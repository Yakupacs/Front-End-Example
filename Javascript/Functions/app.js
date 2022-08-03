// Definite a Function

function sayHello(){
	console.log("Hello World!");
}

function sum(x, y){
	console.log(x + y);
}

function people(name, age){	
	if (typeof name == "undefined") name = "Bilgi yok.";

	if (typeof age == "undefined") age = "Bilgi yok.";
	
	console.log("Name: "+name+" Age: "+age);
}

function square(x) {
	console.log(x*x);
}

function cube(x) {
	return x*x*x;
}

function sayHelloReturn(name){
	return "Hello " + name;
}

// Immediately Invoked Function Expression (IIFE)

(function(name){
	console.log("Merhaba: " + name);
})("Yakup");

const database = {
	host: "localhost",
	add: function(){
		console.log("Eklendi.");
	},
	get: function(){
		console.log("Elde Edildi.");
	},
	update: function(id){
		console.log("Id: " + id + " Güncellendi.");
	},
	delete: function(id){
		console.log("Id: " + id + " Silindi.");
	}
}

console.log(database.host);
database.add();
database.delete(10);