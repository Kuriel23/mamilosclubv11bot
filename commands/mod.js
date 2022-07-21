const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();
    let modEmbed = new Discord.RichEmbed()
        .setTitle("Comandos de Moderação de Mamilos Club <a:parceiro:481494006715514881>")
        .addField("m!adver", "Comando para adverter pessoas.\n*Command to warn people*")
        .addField("m!banir", "Comando para banir pessoas.\n*Command to ban people.*")
        .addField("m!mutar", "Comando para mutar pessoas.\n*Command to mute people.*")
        .addField("m!report", "Comando para reportar pessoas.\n*Command to report people.*")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/549567666407473152/Mamilos_Club_-_Logo__Imagem_2019_-_Ajuda.png")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor(client.cor) 

        message.channel.send(modEmbed)
}

module.exports.help = {
    name: "mod"}