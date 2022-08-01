let value;

const numbers = [43, 56, 46, 75, 2, 4];

const numbers2 = new Array(1,2,3,4,5,6,7);

const lang = ["Python", "Java", "C++", "Javascript"];

const random = ["Merhaba", 42, null, undefined, 3.13];

value = numbers.length;
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];

// random Index Value change

numbers[2] = 1000;
value = numbers;

// Index of

value = numbers.indexOf(1000);

// arrayin sonuna deger ekleme - push

numbers.push(4242);
numbers.unshift(2424);



// Sonundan değer atma

numbers.pop();
numbers.shift();

/* numbers.splice(0,3); */

numbers.reverse();

numbers.sort();

value = numbers;

value = numbers.sort(function(x,y){
	return x - y;
});

value = numbers.sort(function(x,y){
	return y - x;
});


console.log(value);