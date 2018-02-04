const Discord = require('discord.js');
const client = new Discord.Client();

//const prefix = '!';const totalCount = guild.available;
client.on('message',message =>{
  if(message.content.startsWith('!startCount')){
    let count = message.guild.memberCount;
    console.log('Starting countdown Bot! Currently '+ count +' Members!');
    client.user.setActivity(count + ' Members Total');
  }
})

client.on('guildMemberAdd',guildMemberAdd=> {
    let playersAdded = 1;
    //console.log(guildMemberAdd.guild.memberCount);
    let count = guildMemberAdd.guild.memberCount;
    client.user.setActivity(count + ' Members Total');
    console.log(playersAdded + ' new Users joined the Discord during this Bot Session!');
    playersAdded = playersAdded + 1;
});


/*let Gmembers = message.guild.members;
Gmembers.forEach(m => {
  console.log(m);
}) */ //"presence-key gives online members"

client.on('ready', () => {
  console.log('MemberCount Bot is ready!');
});
client.login(process.env.BOT_TOKEN);
