// Typescript is a typed superset of JavaScript that compiles to plain JavaScript

import {
  Application,
  Router,
  RouterContext,
} from 'https://deno.land/x/oak@v10.0.0/mod.ts';

const app = new Application();
const router = new Router();

router.get('/', context => {
  context.response.body = 'Hello World';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(
    `Listening on ${secure ? 'https://' : 'http://'}${
      hostname || 'localhost'
    }:${port}`
  );
});

await app.listen({ port: 8000 });

// denon issue
// https://youtu.be/TQUy8ENesGY?t=7435
// to be continued
