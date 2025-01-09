function greeter(person: string): string {
  return "Hello, " + person;
}

function greet(person: string | string[]): string | string[] {
  if (typeof person === 'string') {
    return greeter(person);
  } else {
    return person.map(name => greeter(name));
  }
}

let user = ["Jane User", "John Smith"];
let user2 = "Jane User";

console.log(greet(user)); // Returns an array of greetings
console.log(greet(user2));// Returns a single greeting