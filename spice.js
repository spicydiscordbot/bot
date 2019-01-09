const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on(`ready`, () => {
  console.log(`bot is online`);
});


bot.on(`message`, async message => {

  // variables
  let sender = message.author;
  let msg = message.content.toUpperCase();
  let prefix = 's.'

  // delete anything but numbers
  if (message.channel.id === '501314085351063562') {
    if (message.author.bot) return;
    console.log(`Test`);
     if (isNaN(message.content)) {
       console.log(`Test 2`);

       message.delete()
       let botMessage = await message.reply('Thats a invalid number!')
       setTimeout(function(){botMessage.delete()}, 3000);

     }
   }
});



bot.login('NTMyNDYxMTE2MTMyMTYzNTg0.Dxc0oA.vapvMzfhdYjtgCO-hZOqDsrdqRc');
