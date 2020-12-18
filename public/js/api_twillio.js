const Twilio = require("twilio");
const client = new Twilio(
  "AC4dc763c08229c69b2fec59b83157cd20",
  "cee0d4485e7f9c015ce549585efb2737"
);

client.messages
  .list()
  .then(messages =>
    console.log(`The most recent message is ${messages[0].body}`)
  ).catch(err => console.error(err));

console.log("Gathering your message log");
