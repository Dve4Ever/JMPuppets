const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '+ping') {
    	message.channel.send('pong');
  	}
});

client.on('message', message => {
    if (message.content === '+coinflip') {
       var flip = Math.floor(Math.random() * 2 + 1);
		if (flip === 1) {
			console.log("Tails");
			message.reply("tails!");
		}
		else {
			console.log("Heads");
			message.reply("heads!");
		}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
