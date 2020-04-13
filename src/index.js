const Discord = require('discord.js');
require('dotenv').config();


const client = new Discord.Client();

client.once('ready', () => {
    console.log('Beep Beep i am ready!');
});

const textChannelId = process.env.textChannelId;
const guildId = process.env.guildId;

const eightBall = [
    'As I see it, yes.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'It is certain.',
    'It is decidedly so.'
];

client.on('message', async (msg) => {

    if (msg.channel.id === textChannelId && msg.guild.id === guildId) {

        if (msg.content.toLowerCase() === 'ping') {
            await msg.reply('pong');
        }
        if (msg.content.toLowerCase() === 'hi') {
            await msg.reply('hello');
        }
        if (msg.content.toLowerCase() === 'hello') {
            await msg.reply('hi');
        }
        if (msg.content.toLowerCase() === 'who') {
            await msg.reply('your father!');
        }


        let regex = '8ball';
        if (msg.content.toLowerCase() === regex) {
            const i = Math.floor(Math.random() * eightBall.length);
            const reply = eightBall[i];
            await msg.reply(reply);
        }

    }

})

client.login(process.env.BOT_TOKEN);