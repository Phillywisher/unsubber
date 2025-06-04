import "https://deno.land/std@0.224.0/dotenv/load.ts";
import * as deno_imap from "jsr:@workingdevshero/deno-imap";

console.log("hello world ");

import { ImapClient } from "jsr:@workingdevshero/deno-imap";

// Create a new IMAP client
const client = new ImapClient({
  host: "outlook.office365.com",
  port: 993,
  tls: true, //encrption method
  username: Deno.env.get("EMAIL_ADDRESS"),
  password: Deno.env.get("EMAIL_PASSWORD"),
});
console.log(client.username);
// Connect and authenticate
try {
  await client.connect();
  await client.authenticate();
  console.log("confirmation of connection");
} catch (error) {
  console.log("failed to auth", error.message);
} finally {
  client.disconnect();
}
