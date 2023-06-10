// Greetings earthlings

function greet(person: string, date:Date) {
	console.log(`Hello ${person}, today is ${date}!`);
	}

greet("Mandy", new Date());

function getNum() : number {
	return 42;
}

console.log(getNum());

const names = ["Alice", "Bob", "Dave", "Ella", "Georg"];

names.forEach(function (s) {
	console.log(s.toUpperCase());
});

names.forEach((s) => {
	console.log(s.toUpperCase());
});

