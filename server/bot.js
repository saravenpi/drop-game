module.exports = function(io, tmi, axios) {
  const client = new tmi.Client({
    options: { debug: false },
    connection: {
      secure: true,
      reconnect: true
    },
    identity: {
      username: process.env.BOT_USERNAME,
      password: process.env.TWITCH_OAUTH_TOKEN
    },
    channels: [process.env.CHANNEL_USERNAME]
  });

  client.connect();
  client.on('connected', function() {
    console.log("🔮 - Twitch bot is reading the chat !");
  });


  client.on('message', (channel, tags, message, self) => {
    if(self || !message.startsWith('!')) {
      return;
    }

    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'drop') {
      if (args) {
        if (args == 'me') {
          axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials`)
          .then((response) =>{
            var options = {
              headers: {
                "Client-Id": process.env.TWITCH_CLIENT_ID,
                Authorization: "Bearer " + response.data.access_token,
              },
              responseType: 'json'
            }

            axios.get(`https://api.twitch.tv/helix/users?login=${tags.username}`, options)
            .then((res) => {

                io.emit('dropme', res.data)
            });

          })
        } else {
          io.emit('drop', tags)
        }
      } else {
        io.emit('drop', tags)
      }

    }

  });

}
