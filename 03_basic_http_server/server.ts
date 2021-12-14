import { serve } from 'https://deno.land/std@0.117.0/http/server.ts';

const addr = ':8080';

const handler = (request: Request): Response => {
  let body = 'Your user-agent is:\n\n';
  body += request.headers.get('user-agent' || 'Unknown');

  return new Response(body, { status: 200 });
};

console.log(`HTTP server running. Access it http://localhost:8080/`);
await serve(handler, { addr });

// > deno run --allow-net .\server.ts
