const Discord = require('discord.js');
const client = new Discord.Client();

//const prefix = '!';const totalCount = guild.available;
client.on('message',message =>{
  if(message.content.startsWith('!startCount')){
    let count = message.guild.memberCount;
    console.log('Starting countdown Bot! Currently '+ count +' Members!');
    client.user.setActivity(count + ' Members');
  }
})

client.on('guildMemberAdd',guildMemberAdd=> {

    console.log(guildMemberAdd.guild.memberCount);
    let count = guildMemberAdd.guild.memberCount;
    client.user.setActivity(count + ' Members');

});


/*let Gmembers = message.guild.members;
Gmembers.forEach(m => {
  console.log(m);
}) */ //"presence-key gives online members"

client.on('ready', () => {
  console.log('MemberCount Bot is ready!');
});

client.login('NDA2OTQ3NjcyMzc3Nzg2Mzc4.DU6ZZg.44dGajzk3s0abcvomghuN1AJkaU');
