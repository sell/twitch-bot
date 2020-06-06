exports.run = (client, message, args, userstate, channel, self) => {
    client.ping().then(function (data) {
        let ping = Math.floor(Math.round(data * 1000))
        client.say(channel, `@${userstate.username}, your ping is ${ping}ms`)
    })
}