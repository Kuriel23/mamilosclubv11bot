const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();
    let connectEmbed = new Discord.RichEmbed()
        .setTitle("🇧🇷 Como posso vincular minha conta Steam ao Discord? \n🇺🇸 *How can I link my Steam account to Discord?*")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/541667888419831812/Bem-vindogif.gif")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor(client.cor) 

        message.channel.send(connectEmbed)
}

module.exports.help = {
    name: "connect"}