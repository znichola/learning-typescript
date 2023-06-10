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

function printCoord(pt: { x: number, y:number }) {
	console.log("x: " + pt.x);
	console.log("y: " + pt.y);
}

printCoord({x:3, y:8})

function printName(obj: { first: string, last?: string }) {
	console.log(obj.first + " " + (!!obj.last ? obj.last : "no name"));

}

printName({ first: "Bob", last: "Ross" });
printName({ first: "Janny" });
