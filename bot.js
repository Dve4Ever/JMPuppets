var draw = function() {
var coin = round(random(1,2));
};
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
    if (message.content === '+coin') {
        if(coin === 1) {message.channel.send('Heads!');}
            else {message.channel.send('Tails!');}
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
