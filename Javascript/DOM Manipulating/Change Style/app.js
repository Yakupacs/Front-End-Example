
// Element Özellikleri

/* console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[0]);
console.log(element.classList[1]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style); */

// Style ve Element Özelliklerini Değiştirme

/* document.querySelector("#clear-todos").className = "btn btn-primary";
document.querySelector("#clear-todos").style.color = "black";
document.querySelector("#clear-todos").marginLeft = "30px";
document.querySelector("#clear-todos").href = "https://yakupacis.com";
document.querySelector("#clear-todos").target = "_blank"; */

/* document.querySelector("#clear-todos").textContent = "Sil";
document.querySelector("#clear-todos").innerHTML = "<span style = 'color:green' >Silin</span>" */

/* const elements = document.querySelectorAll(".list-group-item");
elements.forEach(function(a){
	a.style.color = "red";
	a.style.background = "#eee";
})
 */

let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelector("li:nth-child(3)");
element2 = document.querySelector("li:nth-child(4)");
element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(function(a){
	a.style.background = "#ccc";
	a.style.color = "red";
})

console.log(element2);
/* console.log(elements); */