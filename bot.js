const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "/";



client.on("ready", () => {
    console.log("انا مستعد")
    client.user.setGame("By !...📛☠ ISLEM AP-13  ☠📛...! | /help");
});


















client.login(process.env.BOT_TOKEN);
