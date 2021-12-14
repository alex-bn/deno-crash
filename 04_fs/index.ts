// // read file
// const path = Deno.args[0];
// console.log(path);

// const content = await Deno.readTextFile(path);
// console.log(content);

// // read content of a dir
// const dir = Deno.args[0];
// console.log(dir);

// const path = Deno.cwd() + `/${dir}`;
// for await (const directory of Deno.readDir(path)) {
//   console.log(directory.name);
// }

// // check if the file exists or not
// async function exists(path: string) {
//   try {
//     const stat = await Deno.lstat(path);
//     return true;
//   } catch (error) {
//     if (error instanceof Deno.errors.NotFound) {
//       return false;
//     } else {
//       throw error;
//     }
//   }
// }

// let fileExits = await exists('1.txt');
// console.log('1.txt', fileExits);
// fileExits = await exists('sample.txt');
// console.log('sample.txt', fileExits);

// // create directory
// await Deno.mkdir('test');

// // rename
// await Deno.rename('test', 'renamed');

// // delete
// await Deno.remove('renamed');

// // read file
// await Deno.readTextFile('sample.txt');

// // write into fil
// await Deno.writeTextFile('sample.txt', 'test');

const watcher = Deno.watchFs('/');
for await (const event of watcher) {
  console.log('>>>> event', event);
  // { kind: "create", paths: [ "/foo.txt" ] }
}
