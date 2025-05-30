import * as deno_imap from "jsr:@workingdevshero/deno-imap";

console.log("hello world ");

import { ImapClient } from "jsr:@workingdevshero/deno-imap";

// Create a new IMAP client
const client = new ImapClient({
  host: "imap.example.com",
  port: 993,
  tls: true,
  username: "user@example.com",
  password: "password",
});

// Connect and authenticate
await client.connect();
await client.authenticate();

client.disconnect();
