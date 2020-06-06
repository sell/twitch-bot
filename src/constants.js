require("dotenv").config();
export const CHANNEL_NAME = process.env.CNAME
export const OAUTH_TOKEN = process.env.TOKEN
export const BOT_USERNAME = process.env.BUSERNAME
export const BLOCKED_WORDS = [
    'cats',
    'dogs',
];

console.log(process.env.TOKEN)
console.log(process.env.CNAME)
console.log(process.env.BUSERNAME)
