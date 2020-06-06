exports.run = (client, message, args, userstate, channel, self) => {
    client
      .followersonly(channel, 0)
      .then((data) => {
        // data returns [channel, minutes]
      })
      .catch((err) => {
        //
      });
};
