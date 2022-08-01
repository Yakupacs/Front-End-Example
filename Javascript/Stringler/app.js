let value;

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "HTML,CSS,Javascript";

value = firstName + " " +  lastName;

value = "Yakup";

value += " Açış"; // value = value + " Açış";

value = firstName.length;

value = firstName.concat(firstName, " ", lastName);

value = firstName.toLocaleLowerCase();
value = firstName.toLocaleUpperCase();

value = firstName[0];
value = firstName[firstName.length - 1];

// Index Of

value = firstName.indexOf("i");
value = firstName.indexOf("a");

// Char At

value = firstName.charAt(0);
value = firstName.charAt(firstName.length - 1);

// Split

value = langs.split(",");

// Replace

value = langs.replace("HTML", "Python");

// Includes

value = langs.includes("PHP"); // Listede var mı diye bakıyor

console.log(value);