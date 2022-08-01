let value;

const programmer = {
	name : "Yakup Açış",
	age : 25,
	email: "yakupacs@gmail.com",
	langs : "Python, C, C#, Javascript",

	address : {
		city : "Istanbul",
		street : "Kagithane"
	},

	work : function(){
		console.log("Programcı Çalışıyor.");
	}
}

value = programmer;
value = programmer.email;
value = programmer.address.city;
programmer.work();

const programmers = [
	{name: "Yakup Açış", age: 22},
	{name: "Muhammed Açış", age: 21}
] //Objelerden oluşan array

value = programmers[0].name;

console.log(value);