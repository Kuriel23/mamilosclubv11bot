const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  message.delete();
  let mcskinEmbed = new Discord.RichEmbed()
  .setTitle("Mostrando skin de: " + `${args[0]}`)
  .setImage(`https://mc-heads.net/player/${args[0]}`)
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
  .setColor(client.cor) 

  message.channel.send(mcskinEmbed)

}
module.exports.help = {
  name: "mcskin"}