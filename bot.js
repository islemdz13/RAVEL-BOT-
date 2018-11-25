const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "/";



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame("By !...📛☠ ISLEM AP-13  ☠📛...! | /help")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', msg => {///حقوق بلو كودز
  if (msg.content === 'هاي') {
    msg.reply('هايات');
  }
});

client.on('message', message => {
   const admin_embed = new Discord.RichEmbed()
        .setColor("#3399CC")
        .setTitle("خاصة بالأدمنية فمافوق")
        .addField("/kick", "لطرد شخص قام بتخريب أو عصيان الاوامر")
        .addField("/ban", "لحظر أحد قام بتخريب أو عصيان الأوامر")
        .addField("/mute", "لكتم صوة أحد")
        .addField("/unmute", "لكي تنزع الكتم عن الذي تم كتمه")
        .addField("/warns", "لارسال تحذير على شخص قام بتخريب")
        .addFooter("يمنع استعمال هذه الاوامر بدون أي سبب و الا سوف يتم سحب رتبتك")
        message.channel.sendMessage(admin_embed)
        console.log("خاص بالأدمنية")
       }














client.login(process.env.BOT_TOKEN);
