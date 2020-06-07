const Discord = require('discord.js');
const client = new Discord.Client();

client.login("NzE4OTk5Mjg5MzY3NDk0NzI2.Xt1nMw.OYIPB6RqYKDzEf6JPzr5Dg7Jlsw")

client.on('ready', () => (
 console.log("readyl")
));
if(message.author.bot)
return;

client.on('message', message => {
    if(message.content.toLowerCase() === 'pong')
    message.channel.send ('ping')
});
