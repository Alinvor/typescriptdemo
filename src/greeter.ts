interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

export function sayHello(name: string) {
    return `Hello from ${name}`;
}

let user = { firstName: "Jane", lastName: "User" };

// document.body.innerHTML = greeter(user);