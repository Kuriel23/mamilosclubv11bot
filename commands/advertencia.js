const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  message.delete();  
  if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("Você não tem **permissão** suficiente!")
    let member = message.mentions.members.first()
    if(!member)
      return message.reply("Por favor mencione um usuário válido!")
    if(!member.kickable)
      return message.reply("Eu não posso adverter este usuário, ele tem um cargo de staff maior que o meu!")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Nenhuma razão foi fornecida!"
      .catch(error => message.reply(`Desculpe ${message.author} não consegui adverte-lo devido a um erro técnico, contecte o Koala para ele saber sobre as demais informações no terminal.`))

      message.channel.send(`${message.author} o usuário foi advertido com sucesso!`)
      message.channel.send(`${member}, você foi advertido pelo motivo: ${reason}`)

      let adverEmbed = new Discord.RichEmbed()
          .setTitle("Advertência")
          .addField("Usuário Advertido:", `${member.user.tag}`)
          .addField("Por:", `${message.author.tag}`)
          .addField("Motivo:", `${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
          .setColor(client.cor).setTimestamp()

          member.guild.channels.get('485813238437773324').send(adverEmbed)
          
}

module.exports.help = {
    name: "advertencia"
}