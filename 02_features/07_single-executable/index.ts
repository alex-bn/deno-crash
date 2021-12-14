// deno install index.js

setTimeout(() => {
  Deno.writeTextFile('./sample.txt', new Date().toString());
}, 5000);
// > deno install -n deno_test --allow-write .\index.ts
