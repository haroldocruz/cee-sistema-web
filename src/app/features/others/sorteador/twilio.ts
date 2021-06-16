// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);
const accountSid = "AC3dc40160a0e3af2770d80e0749242e2b";
const authToken = "d4ee82064a84c3743694236339b12909";

import client from "twilio";

export interface ISmsTwilio {
  body: string;
  from: string;
  to: string;
}

export default function (sms: ISmsTwilio) {
  client(accountSid, authToken).messages
    .create(sms)
    .then(message => console.log(message.sid));
}
