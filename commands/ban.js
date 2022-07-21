const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  message.delete();  
  if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Você não tem **permissão** suficiente!")
    let member = message.mentions.members.first()
    if(!member)
      return message.reply("Por favor mencione um usuário válido!")
    if(!member.bannable)
      return message.reply("Eu não posso banir este usuário, ele tem um cargo de staff maior que o meu!")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Nenhuma razão foi fornecida!"
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui banir-o devido a um erro técnico, contecte o Koala para ele saber sobre as demais informações no terminal.`))

      message.channel.send(`${message.author} o usuário foi banido com sucesso!`)

      let banEmbed = new Discord.RichEmbed()
          .setTitle("Ban")
          .addField("Usuário Banido:", `${member.user.tag}`)
          .addField("Por:", `${message.author.tag}`)
          .addField("Motivo:", `${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
          .setColor(client.cor).setTimestamp()

          member.guild.channels.get('485813238437773324').send(banEmbed)
          
}

module.exports.help = {
    name: "ban"
}