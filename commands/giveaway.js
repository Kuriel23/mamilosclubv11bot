const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();
    let giveawayEmbed = new Discord.RichEmbed()
        .setTitle("🇧🇷 Como posso participar de uma giveaway?\n🇺🇸 *How can I join a giveaway?*")
        .setImage("https://media.giphy.com/media/etAXuEp7VEVnARQpA3/giphy.gif")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor(client.cor) 

        message.channel.send(giveawayEmbed)
}

module.exports.help = {
    name: "giveaway"}