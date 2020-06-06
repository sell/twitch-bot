
exports.run = (client, message, args, userstate, channel, self) => {
    client.say(channel, `@${userstate.username}, hey there!`);
};

