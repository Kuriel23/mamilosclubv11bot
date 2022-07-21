const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  message.delete();
  let mcheadEmbed = new Discord.RichEmbed()
  .setTitle("Mostrando cabeça de: " + `${args[0]}`)
  .setImage(`https://mc-heads.net/avatar/${args[0]}`)
  .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
  .setColor(client.cor) 

  message.channel.send(mcheadEmbed)
}
module.exports.help = {
  name: "mchead"}