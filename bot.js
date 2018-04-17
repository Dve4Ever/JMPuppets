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
    if (message.content === '+') {
    	message.channel.send('');
  	}
});
.auto .gift={init}
{embed:
    {title:Something Something Darkside..}
    {type:rich}
    {author|name:{/user}}
    {author|icon:{usericon}}
    {author|url:{usericon}}
    {color:
        {randlist:
             #ff0000,#00ff00,#ffffff,#4286f4,
             #f45642,#262525,#e2d626,#87e226,
             #26e2c0,#2633e2,#8126e2
        }
    }
    {thumb|url:{guild|icon}}
    {desc:
        {randlist2:
            This should be a response,
            Along with this!,
            and now some more,
            Two Step, One Jump!,
            Live long!
        }
    }
    {footer|icon:https://xtclabs.net/img/favicon-new.png}
    {footer|text: Echo 2.0 A.R.S}
}
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
