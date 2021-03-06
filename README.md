# drop-game
This is a Twitch Game for Twitch Streams, so the viewers can type '!drop me' in the chat to watch their profile picture fall down on the stream.

Created with 💖 with Express and Socket.io.

## How to use it:
```
$ git clone https://github.com/saravenpi/drop-game
$ cd drop-game
$ npm install
$ touch .env
```
Once you've clone the repository and you're in it, you'll need to create the .env file as shown up there with `touch .env` or `echo>.env` for windows users.

Then you can paste the variables and insert the requirements as shown down there:

```
CHANNEL_USERNAME=<your twitch username>
BOT_USERNAME=<the username of your twitch bot>
TWITCH_OAUTH_TOKEN=<your twitch oauth token>
TWITCH_SECRET=<your twitch application's secret>
TWITCH_CLIENT_ID=<your twitch application's id>
```

In order to create your twitch bot, just create another account, it will be your bot's account. Once you've created it, in order to get our `TWITCH_OAUTH_TOKEN` you can generate one here: [Twitch Chat OAuth Password Generator](https://twitchapps.com/tmi/). Then in order to get your application's `TWITCH_SECRET` and `TWITCH_CLIENT_ID`, you just have to create an application or the [Twitch Developer Portal](https://dev.twitch.tv/).

You can then add this to your streaming software like OBS or Streamlabs as a browser source with the localhost link shown in your console when you start the script ! 

Thank you!

