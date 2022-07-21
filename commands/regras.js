const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();
    let regrasEmbed = new Discord.RichEmbed()
        .setTitle("Regras de Mamilos Club <a:parceiro:481494006715514881>")
        .addField("<a:squad:478569011857195019> Nós apreciamos um lugar com pessoas reais. Por favor, mantenha sua conta Steam vinculada ao seu Discord.", "<a:squad:478569011857195019> Não poste links de referência (Gleam, Tremor, etc).")
        .addField("<a:squad:478569011857195019> Não faça spam, flood, spoiler ou poste conteúdo inadequado +18.", "<a:squad:478569011857195019> Não implore ou peça por produtos gratuitos (keys, cargos, etc).")
        .addField("<a:squad:478569011857195019> Não faça racismo, discussões religiosas ou fale sobre politica.", "<a:squad:478569011857195019> Não faça propaganda própria, solicite permissão para divulgar seu conteúdo. Parceiros possuem um canal especifico para tal.")
        .addField("<a:squad:478569011857195019> Use o canal de texto/voz correto para o propósito de sua conversa.", "<a:squad:478569011857195019> Proibido assediar, solicitar favores ou se promover em mensagens privadas e nos canais de outros membros do servidor.")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/541675991911759909/Mamilos_Club_-_Logo__Imagem_2019_-_Regras.png")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor(client.cor) 

        message.channel.send(regrasEmbed)
}

module.exports.help = {
    name: "regras"}