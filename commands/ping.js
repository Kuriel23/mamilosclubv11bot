const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    message.delete();
    let clientping = new Date() - message.createdAt;

    message.channel.send(`${message.author}`)
    let pingEmbed = new Discord.RichEmbed()
        .setTitle(":ping_pong:Pong!")
        .addField(":robot: Meu tempo de resposta é:", Math.floor(clientping) + "ms")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor(client.cor) 

        message.channel.send(pingEmbed)
}

module.exports.help = {
    name: "ping"}