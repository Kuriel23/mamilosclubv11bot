const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();
    let infoEmbed = new Discord.RichEmbed()
        .setTitle("Comandos de Informações de Mamilos Club <a:parceiro:481494006715514881>")
        .addField("m!regras | m!rules", "Regras são Regras\n*Rules are Rules*")
        .addField("m!network", "Nossas redes sociais.\n*Our social networks.*")
        .addField("m!connect", "Vincule sua conta steam no Discord.\n*Link your steam account on Discord.*")
        .addField("m!giveaway", "Como posso participar de uma giveaway?\n*How can I join a giveaway?*")
        .addField("m!botinfo", "Informações sobre o bot!\n*Informations about the bot!*")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/542060767940444171/Mamilos_Club_-_Logo__Imagem_2019_-_Informacoes.png")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor(client.cor) 

        message.channel.send(infoEmbed)
}

module.exports.help = {
    name: "info"}