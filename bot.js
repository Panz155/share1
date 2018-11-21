const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 

نظام انفايت جديد 

7 invites ===> 20k credits :probot: 

15 invites ===> 38k credits :probot:

20 invites ===> 50k credits :probot: 

                               [ https://discord.gg/ZmmsvYp ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
