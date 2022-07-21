const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    let CargosEmbed = new Discord.RichEmbed()
        .setTitle("Quais são os cargos do servidor e para que são usados?")
        .setDescription("Nós possuímos um sistema automático de classificação, você ganha XP na medida que interage em nossos canais.\nA medida que você atingir os níveis citados abaixo, você pode alcançar os respectivos cargos. Possuindo rank em nosso servidor, você poderá participar de giveaways exclusivas!")
        .addField("👻 Ghost", "Level 5")
        .addField("🐛 Ninfa | Nymph", "Level 25")
        .addField("🦂 Escorpião | Scorpion", "Level 35")
        .addField("🐮 Vaqueiro | Cowboy", "Level 45")
        .addField("🕹️ Viciado | Addict", "Level 60")
        .addField("👴 Guardião | Guardian", "Level 70")
        .addField("🕵️ Patriota | Patriot", "Level 80")
        .addField("👯 Mamiludo", "Level 99")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/542060765260152832/Mamilos_Club_-_Logo__Imagem_2019_-_Cargos.png")
        .setColor(client.cor)

        message.channel.send(CargosEmbed)
        
}
module.exports.help = {
    name: "teste"}