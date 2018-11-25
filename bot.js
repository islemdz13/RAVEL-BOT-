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



client.on('message', message => { 

    if(message.content === "هلا"){
        message.reply("أهلين")
        console.log("le Bot dit أهلين")
    }

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#006600")
        .setTitle("فيما يلي أوامر المساعدة الخاصة بي :D")
        .setDescription("أنا بوت هنا أوامر المتاحة")
        .addField("/help", "يعرض أوامر البوت !")
        .addField("هلا", "البوت يرد أهلين")
        .addField("/stats", "سوف يتم ارسالها في الخاص")
        .addField("/info", "سوف ترى جميع المعلومات")
        .addField("/support", "لدخول الى سبورت سيرفر")
        .setFooter("قائمة المساعدة")
        message.channel.sendMessage(help_embed)
        console.log("مستخدم لأداء أمر المساعدة")
    }

    if(message.content === prefix + "admin"){
        var admin_embed = new Discord.RichEmbed()
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
    
    if(message.content === prefix + "info"){
        var info_embed = new Discord.RichEmbed()
        .setColor("#999900")
        .setTitle("هذه هي المعلومات عني وعن الخادم")
        .addField(" :robot: اسم :", `${client.user.tag}`, true)
        .addField("المميزات البوت : :hash:", `#${client.user.discriminator}`)
        .addField("ID : id: ", `${client.user.id}`)
        .addField("عدد الأفراد", message.guild.members.size)
        .addField("عدد فئة وصالونات", message.guild.channels.size)
        .setFooter("info - Ravel BOT")
        message.channel.sendMessage(info_embed)
        console.log("قام مستخدم بوضع أمر المعلومات")
    }
    
    if(message.content.startsWith(prefix + "kick")){
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("ليس لديك إذن !");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("يجب ذكر المستخدم")
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("لا أعرف ما إذا كان المستخدم موجودًا :/")
        }
    
        if(message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("ليس لدي إذن للطرد");
        }
    
        kick.kick().then(member => {
            message.channel.send(`${member.user.username} est kick pas ${message.author.username}`);
        });
    }

    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("ليس لديك إذن !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("يجب ذكر المستخدم");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("لا أعرف ما إذا كان المستخدم موجودًا :/");
        }

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("ليس لدي إذن للحظر");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username} هو حظر من قبل ${message.author.username} !`)
        });
        
    }

    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("ليس لديك إذن !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("يجب عليك تحديد عدد من الرسائل لحذفها !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} تم حذف الرسائل !`);
        });
    }

    if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("ليس لديك إذن !");

        if(message.mentions.users.size === 0) {
            return message.channel.send('يجب عليك ذكر مستخدم!');
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("يجب عليك ذكر مستخدم!");
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} هو كتم الصوت !`);
        });
    }

    if(message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("ليس لديك إذن !");

        if(message.mentions.users.size === 0) {
            return message.channel.send('يجب عليك ذكر مستخدم!');
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("لم أجد المستخدم أو أنه غير موجود !");
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("ليس لدي الاذن !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`${mute.user.username} لم يعد كتم الصوت !`);
        });
    }

    var fs = require('fs');

let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

if (message.content.startsWith(prefix + "warn")){

if (message.channel.type === "dm") return;

var mentionned = message.mentions.users.first();

if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: ليس لديك إذن `إدارة الخادم` في هذا الخادم**").catch(console.error);

if(message.mentions.users.size === 0) {

  return message.channel.send("**:x: لم تذكر أي مستخدمين**");

}else{

    const args = message.content.split(' ').slice(1);

    const mentioned = message.mentions.users.first();

    if (message.member.hasPermission('MANAGE_GUILD')){

      if (message.mentions.users.size != 0) {

        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {

          if (args.slice(1).length != 0) {

            const date = new Date().toUTCString();

            if (warns[message.guild.id] === undefined)

              warns[message.guild.id] = {};

            if (warns[message.guild.id][mentioned.id] === undefined)

              warns[message.guild.id][mentioned.id] = {};

            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;

            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){

              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};

            } else {

              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),

                time: date,

                user: message.author.id};

            }

            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

message.delete();

            message.channel.send(':warning: | **'+mentionned.tag+' لقد تم تحذير**');

message.mentions.users.first().send(`:warning: **Warn |** من **${message.guild.name}** التي قدمها **${message.author.username}**\n\n**سبب:** ` + args.slice(1).join(' '))

          } else {

            message.channel.send("خطأ في سوء الاستخدام: "+prefix+"warn <user> <raison>");

          }

        } else {

          message.channel.send("خطأ في سوء الاستخدام: "+prefix+"warn <user> <raison>");

        }

      } else {

        message.channel.send("خطأ في سوء الاستخدام: "+prefix+"warn <user> <raison>");

      }

    } else {

      message.channel.send("**:x: ليس لديك إذن `إدارة الخادم` في هذا الخادم**");

    }

  }

}



  if (message.content.startsWith(prefix+"seewarns")||message.content===prefix+"seewarns") {

if (message.channel.type === "dm") return;

if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: ليس لديك إذن `إدارة الخادم` في هذا الخادم**").catch(console.error);

    const mentioned = message.mentions.users.first();

    const args = message.content.split(' ').slice(1);

    if (message.member.hasPermission('MANAGE_GUILD')){

      if (message.mentions.users.size !== 0) {

        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {

          try {

            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {

              message.channel.send("**"+mentioned.tag+"** لا يوجد تحذير :eyes:");

              return;

            }

          } catch (err) {

            message.channel.send("**"+mentioned.tag+"** لا يوجد تحذير :eyes:");

            return;

          }

          let arr = [];

          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");

          for (var warn in warns[message.guild.id][mentioned.id]) {

            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+

            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");

          }

          message.channel.send(arr.join('\n'));

        } else {

          message.channel.send("خطأ في سوء الاستخدام: "+prefix+"seewarns <user> <raison>");

          console.log(args);

        }

      } else {

        message.channel.send("خطأ في سوء الاستخدام: "+prefix+"seewarns <user> <raison>");

      }

    } else {

      message.channel.send("**:x: ليس لديك إذن `إدارة الخادم` في هذا الخادم**");

    }

  }





  if (message.content.startsWith(prefix+"deletewarns")||message.content===prefix+"deletewarns") {

if (message.channel.type === "dm") return;

if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: ليس لديك إذن `إدارة الخادم` في هذا الخادم**").catch(console.error);

   const mentioned = message.mentions.users.first();

    const args = message.content.split(' ').slice(1);

    const arg2 = Number(args[1]);

    if (message.member.hasPermission('MANAGE_GUILD')){

      if (message.mentions.users.size != 0) {

        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){

          if (!isNaN(arg2)) {

            if (warns[message.guild.id][mentioned.id] === undefined) {

              message.channel.send(mentioned.tag+" لا يوجد تحذير");

              return;

            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {

              message.channel.send("**:x:هذا التحذير غير موجود**");

              return;

            }

            delete warns[message.guild.id][mentioned.id][arg2];

            var i = 1;

            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){

              var val=warns[message.guild.id][mentioned.id][key];

              delete warns[message.guild.id][mentioned.id][key];

              key = i;

              warns[message.guild.id][mentioned.id][key]=val;

              i++;

            });

            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {

              delete warns[message.guild.id][mentioned.id];

            }

            message.channel.send(`Le warn de **${mentioned.tag}**\': **${args[1]}** تمت إزالته بنجاح!`);

            return;

          } if (args[1] === "جميع") {

            delete warns[message.guild.id][mentioned.id];

            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});

            message.channel.send(`Les warns de **${mentioned.tag}**  تمت إزالته بنجاح!`);

            return;

          } else {

            message.channel.send("خطأ في سوء الاستخدام: "+prefix+"clearwarns <utilisateur> <nombre>");

          }

        } else {

          message.channel.send("خطأ في سوء الاستخدام: "+prefix+"clearwarns <utilisateur> <nombre>");

        }

      } else {

       message.channel.send("خطأ في سوء الاستخدام: "+prefix+"clearwarns <utilisateur> <nombre>");

      }

    } else {

      message.channel.send("**:x: ليس لديك إذن `إدارة الخادم` في هذا الخادم**");

    }

  }




   if (!message.content.startsWith(prefix)) return;

   var args = message.content.substring(prefix.length).split(" ");

   switch (args[0].toLowerCase()) { 
       case "stats":

       var userCreateDate = message.author.createdAt.toString().split(" ");
       var msgauthor = message.author.id;

       var stats_embed = new Discord.RichEmbed()

       .setColor("#FCDC12")
       .setTitle(`إحصائية للمستخدم : ${message.author.username}`)
       .addField(`معرف المستخدم :id:`, msgauthor, true)
       .addField(`تاريخ تسجيل اللاعب :`, userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
       .setThumbnail(message.author.avatarURL)
       message.reply("يمكنك مشاهدة رسائلك الخاصة !")
       message.author.send(stats_embed);
       break;
   }


});

  client.on("message",  message => {
    if (message.content == "/support") {
    message.channel.send('https://discord.gg/Dvs8U7');
    }
    });









client.login(process.env.BOT_TOKEN);
