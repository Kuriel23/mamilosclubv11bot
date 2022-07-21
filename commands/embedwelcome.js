const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();
    let IntroduçãoEmbed = new Discord.RichEmbed()
        .setTitle("🇧🇷 Discord Mamilos Club: Introdução do Servidor")
        .addField("➥ Nós somos um grupo brasileiro, dedicado a reviews, giveaways e marketing de jogos dentro da plataforma Steam.", "➥ Pedimos gentilmente que leiam as regras e informações aqui presentes antes de interagir com a comunidade.")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/541954703299444756/Mamilos_Club_-_Logo__Imagem_2019_-_Bem-Vindo.png")
        .setColor(client.cor) 
        let RegrasEmbed = new Discord.RichEmbed()
        .setTitle("🇧🇷 Discord Mamilos Club: Regras do servidor")
        .addField("<a:squad:478569011857195019> Nós apreciamos um lugar com pessoas reais. Por favor, mantenha sua conta Steam vinculada ao Discord.", "<a:squad:478569011857195019> Não poste links de referência (Gleam, Tremor, etc).")
        .addField("<a:squad:478569011857195019> Não faça racismo, discussões religiosas ou fale sobre política.", "<a:squad:478569011857195019> Não faça propaganda própria, solicite permissão para divulgar seu conteúdo.Parceiros possuem um canal específico para tal.")
        .addField("<a:squad:478569011857195019> Não faça spam, flood, spoiler ou poste conteúdo inadequado +18.", "<a:squad:478569011857195019> Não implore ou peça por produtos gratuitos (keys, cargos, etc).")
        .addField("<a:squad:478569011857195019> Use o canal de texto/voz correto para o propósito da sua conversa.", "<a:squad:478569011857195019> Proibido assediar, solicitar favores ou se promover em mensagens privadas e nos canais de outros membros do servidor.")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/541675991911759909/Mamilos_Club_-_Logo__Imagem_2019_-_Regras.png")
        .setColor(client.cor)
        let VerificaçãoEmbed = new Discord.RichEmbed()
        .setTitle("🇧🇷 Porque o servidor possui verificação de usuário?")
        .addField("Nós configuramos o servidor com etapas extras e fáceis de segurança para combater contas BOT", "Se você não possui sua conta STEAM vinculada ao Discord, não terá acesso a todo conteúdo do nosso servidor.")
        .addField("Remova a restrição conectando sua conta STEAM", "Siga o tutorial abaixo de como conectar!")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/541956005970444299/Mamilos_Club_-_Logo__Imagem_2019_-_Verificacao.png")
        .setColor(client.cor)
        let VinculaçãoEmbed = new Discord.RichEmbed()
        .setTitle("🇧🇷 Como posso vincular minha conta Steam ao Discord?")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/541667888419831812/Bem-vindogif.gif")
        .setColor(client.cor)
        let membroEmbed = new Discord.RichEmbed()
        .setTitle("🇧🇷 Discord Mamilos Club: Seja Membro!")
        .setDescription("Caso concorde com as regras e possua sua conta STEAM conectada, \nclique no <a:corretogif:542064160872202246> para ter acesso ao nosso conteúdo")
        .setColor(client.cor) 

        message.channel.send(IntroduçãoEmbed)
        message.channel.send(RegrasEmbed)
        message.channel.send(VerificaçãoEmbed)
        message.channel.send(VinculaçãoEmbed)
        return message.channel.send({embed: membroEmbed}).then(embedMessage => {
            embedMessage.react("542064160872202246");
}),

module.exports.help = {
    name: "embedwelcome"}}