const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjU1NTQxNzg4MzE2MjcwNjE1.XfYuBw.Wy2rci62gkXWTj200UHpsvak8D4';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channelse.find(channel => channel.name === "velkommen");
    if(!channel) return;

    channel.send('Velkommen til Hyggehjørnet, ${member}, bare smid skone, og slap af og game!!:nerd:')
});

bot.on('message', msg=>{
    if(msg.content === "!bot2"){
        msg.reply('Denne bot var i starten en test bot, som blev til noget meget mere!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Hejsa"){
        msg.reply('Hejsa til dig også!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "Trier"){
        msg.reply('Trier er en lille dreng på 13.5 som på nogle punkter er velkommen!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "Katana"){
        msg.reply('Katana5112 er hoved streameren på twitch.com/katana5112!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Madara"){
        msg.reply('Madara Uchiha er Dans storebror, og Theis´ fætter!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "Dan"){
        msg.reply('Dan er Theis´ fætter, og arbejder til dagligt som landmand!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "Gesus"){
        msg.reply('Gesus AKA Bente Olsen er bare en jeiner, din jeiner!:heart:!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "Pablo"){
        msg.reply('Pablo er bare pablo. Pis ham ikke af!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "Theis"){
        msg.reply('Theis har lavet discorden, og har lavet mig botten!')
    }
})

bot.on('message', msg=>{
    if(msg.content === "Benjamin"){
        msg.reply('Benjamin er trucker, og elsker at høre country musik!')
    }
})

bot.login(token);