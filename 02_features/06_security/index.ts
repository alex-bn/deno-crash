// // --allow-read Read current working directory
// console.log(Deno.cwd()); // ERROR unless >deno run --allow-read .\index.ts

// // --allow-read Read file content and output
// deno run --allow-read=C:\users\ion\Desktop .\index.ts
// const content = await Deno.readTextFile('./read.txt'); // returns a Promise..
// console.log('async:', content);
// const contentSync = Deno.readTextFileSync('./read.txt');
// console.log('sync:', contentSync);

// // --allow-write Write content into file
// Deno.writeTextFile('./write.txt', '123');

// // --allow-env Environmental access
// Deno.env.get('TEST');

// --allow-net Allow network access
const json = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(
  response => response.json()
);
console.log(json);
// can also specify domain: >deno run --allow-net=jsonplaceholder.typicode.com .\index.ts
