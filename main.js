import * as deno_imap from "jsr:@workingdevshero/deno-imap";
import "https://deno.land/std@0.224.0/dotenv/load.ts";

console.log("hello world ");

import { ImapClient } from "jsr:@workingdevshero/deno-imap";

// Create a new IMAP client
const client = new ImapClient({
  host: "imap.example.com",
  port: 993,
  tls: true,
  username: Deno.env.get("EMAIL_ADDRESS"),
  password: Deno.env.get("EMAIL_PASSWORD"),
});

// Connect and authenticate
await client.connect();
await client.authenticate();

client.disconnect();
