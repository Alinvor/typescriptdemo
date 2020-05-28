import { sayHello } from './greeter';

function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}
hello("TypeScript");
console.log(sayHello("TypeScript with greeter.ts"));