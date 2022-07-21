const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();
    let clientping = new Date() - message.createdAt;
    let botinfoEmbed = new Discord.RichEmbed()
        .setTitle("**Botinfo** de Mamilos Club <a:parceiro:481494006715514881>")
        .addField("😍Usuários:", client.users.size)
        .addField("<:servidor:557172026058604562>Servidor(es):", "2")
        .addField("🏓Ping:", Math.floor(clientping) + "ms")
        .addField("📚Linguagem:", "Javascript")
        .addField("💻Desenvolvido por:", "Koala#6339")
        .addField("👥Sugestões por:", "Todos :3 (Principalmente o Koala#6339, Mamilos#0001, Willian's Rock#9833)")
        .addField("🤙Ajudantes:", "Mamilos#0001, Willian's Rock#9833, brunowsky#6070, Kaze#0101")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor(client.cor) 

        message.channel.send(botinfoEmbed)
}

module.exports.help = {
    name: "botinfo"}