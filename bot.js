import Discord from 'discord.js-selfbot-v13';

const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
});


const blacklist = ['', ''];
const serverBlacklist = ['','','','','',''];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (blacklist.includes(message.author.id)) {
        return;
    }

    if (serverBlacklist.includes(message.guild?.id)) {
        return;
    }

    const lowercaseContent = message.content.toLowerCase();

    if (lowercaseContent.includes('quoi') || lowercaseContent.includes('koa') || lowercaseContent.includes('kwa') || lowercaseContent.includes('koi')) {
        
        const wordsAfterQuoi = lowercaseContent.split('quoi')[1];
        if (!wordsAfterQuoi || wordsAfterQuoi.trim() === '' || wordsAfterQuoi.match(/^\W+$/)) {
            message.channel.send(`<@${message.author.id}> : 🦧 feur`);
        }
    }
});

const commands = {
    quoi: (message) => {
        message.channel.send(`<@${message.author.id}> : 🦧 feur`);
    },
};



client.login('YOUR_DISCORD_TOKEN'); // Remplace avec le token de ton compte
