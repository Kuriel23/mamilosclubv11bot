const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();
    let helpEmbed = new Discord.RichEmbed()
        .setTitle("Comandos de Mamilos Club Steam <a:parceiro:481494006715514881>")
        .addField("m!info", "Comando sobre informações do servidor.\n*Command bringing server information.*")
        .addField("m!games", "Comando para atribuir cargos de jogos em seu perfil.\n*Command to assign roles of games on your profile.*")
        .addField("m!fun", "Comando para você se divertir com nosso bot.\n*Command to have fun with our bot.*")
        .addField("m!mod", "Comando para você conhecer os comandos de moderação.\n*Command for you to know moderation commands*")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/549567666407473152/Mamilos_Club_-_Logo__Imagem_2019_-_Ajuda.png")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor(client.cor) 

        message.channel.send(helpEmbed)
}

module.exports.help = {
    name: "help"}