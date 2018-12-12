require('http').createServer().listen(3000)

const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const links = require('./links.json');



bot.on("guildMemberAdd", async member => {
    member.guild.channels.get('515355940992712735').send(member.user.name + ' Oi eu sou a VI, me manda um "+oi" e vamo bater um papo :wink: ');
    member.send("Opaaaa, manda um +oi que eu te respondo, sou um bot inteligencia artificial, interajo com as pessoas,basicamente!");
});
bot.on("guildMemberRemove", async member => {
    member.guild.channels.get('515355940992712735').send(member.user.name + ' Saiu do serber .0. ');
})

//Inicio status do bot - bot.user.setActivity('+comandos|+help|+donate');
bot.on('ready', () => {
    console.log('Estou online senhor');
    let status = [
        { name: 'Ajuda noiz +donate', type: 'PLAYING'},
        { name: 'Use +ajuda para alguma dúvida. :)', type: 'PLAYING'},
        { name: 'Fui desenvolvida por Eduardo Leal', type: 'PLAYING'},
        { name: '+comandos|+help|+donate', type: 'LISTENING'},
        { name: 'UM FELIZ NATAL!!!', type: 'WATCHING' }
    ];
    function setStatus() {
        let randomStatus = status[Math.floor(Math.random() * status.length)];
        bot.user.setPresence({ game: randomStatus });
    }
    setStatus();
    setInterval(() => setStatus(), 5000);  //5000 = 5Ms = 5 segundos
});
//END status bot



// Inico resposta bot
bot.on('message', async message => {
    if(message.author.bot) return;

    const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = msgs.shift().toLocaleLowerCase();
    const cmd = message.content.search(links);
    ResponseObject = links;

    if(ResponseObject[message.content]){
        message.reply(ResponseObject[message.content]);
    }
    if(message.content.startsWith(config.prefix + 'comandos')){
        message.reply('Você ira receber os comandos no seu Privado :wink:');
        message.member.send('Oi! Eu sou a Vi, a melhor bot de todos os tempos :grin: utilizo o prefixo + , tente : +ajuda');
        message.member.send('Comandos :');
        message.member.send('--------------------------------------------------------- Vi ------------------------------------------------------------');
        message.member.send('No geral, Vi é semelhante a uma inteligencia artificial(pseudo I.A.)\nTodos os dias novos comandos são incrementados, ja possuindo mais de 320 interações.');
        message.member.send('Ela serve para entretenimento de um servidor, mande um +oi e responda :wink: \nSe você xinga-la, como também elogia-la ela ira te responder!\nCaso não responda envie em vibot.contato@gmail.com o seu comando que falhou :wink: \nSe você tem uma sugestão envie em vibot.contato@gmail.com');
        message.member.send('--------------------------------------------------------- Vi ------------------------------------------------------------');
    };
    
    //INICIO SWITCH CASES
    switch(comando){
        case "ping" :
            const ms = await message.channel.send("ping?");
            const clientms = ms.createdTimestamp = message.createdTimestamp;
            ms.edit('pong!');
            message.channel.send( 'Seu ping: '+ Math.round(clientms) + 'ms');
            message.channel.send( 'Bot ping: '+ Math.round(bot.ping) + 'ms');
            message.channel.send('------------------------------------------')
            message.channel.send('Considere apenas os 3 primeiros números do seu ping, estamos com um problema para definir corretamente :tired_face:');
        break;

        case "gay" :
            message.reply('Você mesmo(a)');
        break;

        case "viado" :
            message.reply('Você mesmo(a)');
        break;

        case "tomanocu" :
         message.reply('Primeiro aqueles que já estão mais habituados');
        break;

        case "fazalista" :
            message.channel.send('Falta coletiva amanhã :');
            message.channel.send('Rafael');
            message.channel.send('Bruninho');
            message.channel.send('Will');  
            message.channel.send('Otavio');
        break;

        case "roleta" :
            randomNumber = Math.floor(Math.random() * (6 - 1) +1 );
            if(randomNumber == 2){
                message.reply("Vc tirou: " + randomNumber + "\nBang!Tu foi de base rapaiz");
            }
            else{
                message.reply("Vc tirou: " + randomNumber +"\nBoa,está com sorte hoje")
            }
    }
    //END SWITCH CASES
});
// END RESPOSTA BOT


bot.login(config.token);