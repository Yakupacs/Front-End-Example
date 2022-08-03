// While

/* let i = 0;

while (i < 10){
	console.log(i);
	i++;
} */

// Break and Continue

/* let i = 0; */

/* while (i < 10){
	console.log(i);
	if (i == 5) break;
	i++;
} */

/* i = 0;

while (i < 10){ //Sonsuz döngi
	if (i == 3 || i == 5){
		i++;
		continue;		
	}
	console.log(i);
	i++;
} */

/* let i = 0;
do{
	console.log(i);
	i++;
}while(i < 10) */

const langs = ["Python", "Javascript", "Java"]; 
/* let index = 0;
while(index < langs.length)
{
	console.log(langs[index]);
	index++;
} */

/* for (let index = 0; index < langs.length; index++)
{
	console.log(langs[index]);
} */

/* langs.forEach(function(lang){
	console.log(lang);
}) */


/* const users = [
	{name:"Yakup", age:22},
	{name:"Ali", age:42},
	{name:"Murat", age:11}
];

const names = users.map(function(user){
	return user.name;
});
const ages = users.map(function(user){
	return user.age;
});

console.log(names); */

let dizi = [1,2,3,4];

const user = {
	name: "Yakup",
	age: 22
};

for (let key in dizi){
	console.log(dizi[key]);
}