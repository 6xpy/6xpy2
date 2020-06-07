const Discord = require('discord.js');
const client = new Discord.Client();

client.login("NzE4OTk5Mjg5MzY3NDk0NzI2.Xt0seA.LWiuZd00rCrYOvz_HvH9Y7xwNtk")

client.on('ready', () => (
 console.log("readyl")
));
if(message.author.bot)
return;

client.on('message', message => {
    if(message.content.toLowerCase() === 'pong')
    message.channel.send ('ping')
});