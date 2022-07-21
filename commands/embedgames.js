const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();
    let InfoEmbed = new Discord.RichEmbed()
        .setTitle("Informações úteis que podem lhe ajudar!")
        .setDescription("Informações comuns que nossos membros questionam sobre o servidor, a função de cada sala, como subir de nível, ganhar cargos, como utilizar nossos bots, etc.\nTalvez os tópicos abaixo possam lhe ajudar a encontrar o que você procura.")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/542060767940444171/Mamilos_Club_-_Logo__Imagem_2019_-_Informacoes.png")
        .setColor(client.cor)
        let SalasEmbed = new Discord.RichEmbed()
        .setTitle("Quais são as salas do servidor e para que são usadas?")
        .addField("➥ #sugestões:", "Contribua com Servidor sugerindo melhorias;")
        .addField("➥ #anúncios:", "Divulgação de conteúdo publicado relacionado ao nosso site ou grupo;")
        .addField("➥ #lives:", "Divulgação das lives e vídeos criados por nossos parceiros;")
        .addField("➥ #português:", "Chat oficial para interação de todo o grupo em Português/BR;")
        .addField("➥ #english:", "Chat oficial para interação de grupo em outros idiomas;")
        .addField("➥ #sorteios: 🎉", "Sorteios para todos os membros do canal, sem restrições - Para participar, utilize a react;")
        .addField("➥ #sorteios-exclusivos: 🎉", "Sorteios para membros que possuem um cargo - Para participar, utilize a react;")
        .addField("➥ #sorteios-cooperativos:", "Sorteios Compartilhados com variados servidores - Para participar das giveaways, utilize o comando !ga enter - Caso seja o vencedor, utilize !ga claim;")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/542060771723706381/Mamilos_Club_-_Logo__Imagem_2019_-_Salas.png")
        .setColor(client.cor)
    let BotsEmbed = new Discord.RichEmbed()
        .setTitle("Quais são os bots do servidor e para que são usados?")
        .addField("Mamilos Club", "Aqui estou eu! Eu sou o bot oficial do servidor.\nEm que consiste moderar o servidor para evitar comportamentos contra as nossas regras oficiais, divertir as pessoas, informar e muito mais! Use o meu prefixo **m!** para obter ajuda ou usar outros comandos.")
        .addField("GiveawayBot", "Desenvolvido para realizar giveaways automaticamente e escolher um vencedor.\nClique no canal <#318416688594812938> e use o emoji 🎉 dentro da mensagem do sorteio que estiver ocorrendo.")
        .addField("MEE6", "Esse bot é usado para subir de nível e dar cargos enquanto você interage no chat.\nCada vez que você postar uma mensagem, você recebe um número aleatório de XP entre 15 e 25.\nPara evitar flood, você só pode ganhar xp uma vez por minuto. Use o prefixo **!** para pedir ajuda ou usar outros comandos.")
        .addField("Tatsumaki", "Esse bot é utilizado para subir de nível e premiar créditos para você jogar vários jogos.\nAlguns exemplos como: Tatsugotchi, que permite que você tenha um pet de estimação, ou o caça-níqueis para apostar créditos. Use o prefixo **t!** para pedir ajuda ou usar outros comandos.")
        .addField("Pokécord", "Os pokemons por esse gamebot trazem momentos divertidos.\nNo estilo clássico dos vários jogos de Pokemon, você pode caçar, usar itens e muito mais. Use o prefixo **p!** para pedir ajuda ou usar outros comandos.")
        .addField("Groovy", "Para ouvir as músicas dentro do servidor.\nVocê pode utilizar esse music bot que cria playlists dentro do canal de voz. Use o prefixo **-** para pedir ajuda ou usar outros comandos.")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/542060761799983134/Mamilos_Club_-_Logo__Imagem_2019_-_Bots.png")
        .setColor(client.cor)
    let NetworkEmbed = new Discord.RichEmbed()
        .setTitle("Qual a nossa network?")
        .addField("Website", "[Link Website](https://mamilos.club)")
        .addField("Grupo Steam", "[Link Grupo Steam](https://steamcommunity.com/groups/mamilosclub)")
        .addField("Curador", "[Link Curador](https://store.steampowered.com/curator/25236715/)")
        .addField("Twitch", "[Link Twitch](https://www.twitch.tv/mamilosclub)")
        .addField("Grupo Facebook", "[Link Grupo Facebook](https://www.facebook.com/groups/mamilosclub)")
        .addField("Twitter", "[Link Twitter](https://twitter.com/MamilosClub)")
        .addField("Fanpage", "[Link Fanpage](https://www.facebook.com/mamilosclub)")
        .addField("Instagram", "[Link Instagram](https://www.instagram.com/mamilosclubsteam)")
        .addField("Youtube", "[Link Youtube](https://www.youtube.com/c/MamilosClubSteam)")
        .addField("Discord", "[Link Discord](https://discord.gg/mamilosclubsteam)")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/542060770507358258/Mamilos_Club_-_Logo__Imagem_2019_-_NetWork.png")
        .setColor(client.cor)
    let EmojisEmbed = new Discord.RichEmbed()
        .setTitle("Nós temos emojis?")
        .setDescription("Nós temos emojis exclusivos no nosso servidor. Aproveite! (Caso tenha ideias interessantes sobre emojis e outros, sugira para nós usando o canal apropriado).")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/542060766467981312/Mamilos_Club_-_Logo__Imagem_2019_-_Emoticons.png")
        .setColor(client.cor)
    let CargosEmbed = new Discord.RichEmbed()
        .setTitle("Quais são os cargos do servidor e para que são usados?")
        .setDescription("Nós possuímos um sistema automático de classificação, você ganha XP na medida que interage em nossos canais.\nA medida que você atingir os níveis citados abaixo, você pode alcançar os respectivos cargos. Possuindo rank em nosso servidor, você poderá participar de giveaways exclusivas!")
        .addField("👻 Ghost", "Level 5")
        .addField("🐛 Ninfa | Nymph", "Level 25")
        .addField("🦂 Escorpião | Scorpion", "Level 35")
        .addField("🐮 Vaqueiro | Cowboy", "Level 45")
        .addField("🕹️ Viciado | Addict", "Level 60")
        .addField("👴 Guardião | Guardian", "Level 70")
        .addField("🕵️ Patriota | Patriot", "Level 80")
        .addField("👯 Mamiludo", "Level 99")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/542060765260152832/Mamilos_Club_-_Logo__Imagem_2019_-_Cargos.png")
        .setColor(client.cor)
    let gamesEmbed = new Discord.RichEmbed()
        .setTitle("Tags de Games do Mamilos Club <a:parceiro:481494006715514881>")
        .setDescription("Clique nos emojis indicados para ganhar a sua tag!")
        .addField("<:apex:545572755794427905> - Apex", "<:FortniteLogo:482913627913846786> - Fortnite")
        .addField("<:pubg:482514918378045451> - PUBG", "<:scum:489204462166999041> - SCUM")
        .addField("<:Overwatch:482514645664399362> - Overwatch", "<:csgo:482515768630706176> - CSGO")
        .addField("<:dbd:482514996425654294> - DBD", "<:GTA:485859427505799179>  - GTA")
        .addField("<:lolzim:482515623990263818> - LOL", "<:Warframe:482515378975801347> - WARFRAME")
        .addField("<:Battlefield:482517177790889984> - BATTLEFIELD", "<:RustPC:482515068630597633> - RUST")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/549567672459984911/Mamilos_Club_-_Logo__Imagem_2019_-_Jogos.png")
        .setColor(client.cor) 

        message.channel.send(InfoEmbed)
        message.channel.send(SalasEmbed)
        message.channel.send(BotsEmbed)
        message.channel.send(NetworkEmbed)
        message.channel.send(EmojisEmbed)
        message.channel.send(CargosEmbed)
        return message.channel.send({embed: gamesEmbed}).then(embedMessage => {
            embedMessage.react("545572755794427905");
            embedMessage.react("482913627913846786");
            embedMessage.react("482514918378045451");
            embedMessage.react("489204462166999041");
            embedMessage.react("482514645664399362");
            embedMessage.react("482515768630706176");
            embedMessage.react("482514996425654294");
            embedMessage.react("485859427505799179");
            embedMessage.react("482515623990263818");
            embedMessage.react("482515378975801347");
            embedMessage.react("482517177790889984");
            embedMessage.react("482515068630597633");
}),

module.exports.help = {
    name: "embedgames"}}