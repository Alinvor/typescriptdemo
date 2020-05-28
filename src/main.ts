// the node version
import { sayHello } from './greeter';

function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}

hello("TypeScript");
console.log(sayHello("TypeScript with greeter.ts"));

// the browser version
// function showHello(divName: string, name: string) {
//     const elt = document.getElementById(divName);
//     elt.innerText = sayHello(name);
// }

// showHello("greeting", "TypeScript.");