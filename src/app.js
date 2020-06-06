import tmi from "tmi.js";
import {
  CHANNEL_NAME,
  OAUTH_TOKEN,
  BOT_USERNAME,
  BLOCKED_WORDS,
} from "./constants";
const options = {
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: BOT_USERNAME,
    password: OAUTH_TOKEN,
  },
    channels: [CHANNEL_NAME],
  // doChatClears = true,
};
const client = new tmi.Client(options);
var prefix = "!";
client.on("message", (channel, userstate, message, self) => {
  if (self) return;
 // if (userstate.username === BOT_USERNAME) return;
  // message deleter
  checkTwitchChat(userstate, message, channel);

  const args = message.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args, userstate, channel, self);
  } catch (err) {
    return;
  }
});

function checkTwitchChat(userstate, message, channel) {
  message = message.toLowerCase();
  let shouldSendMessage = false;
  shouldSendMessage = BLOCKED_WORDS.some((blockedWord) =>
    message.includes(blockedWord.toLowerCase())
  );

  if (shouldSendMessage) {
    client.say(
      channel,
      `@${userstate.username}, sorry! Your message was delted.`
    );
    client.deletemessage(channel, userstate.id);
  }
}

client.connect();
