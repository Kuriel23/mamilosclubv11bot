const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();
    let funEmbed = new Discord.RichEmbed()
        .setTitle("Comandos de Diversão de Mamilos Club <a:parceiro:481494006715514881>")
        .addField("m!hug", "Abraçe pessoas.\n*Hug people.*")
        .addField("m!dog", "Dogs são fofos.♥\n*Dogs are cute.♥*")
        .addField("m!cat", "Gatos são ainda fofos.♥\n*Cats are still cute.♥*")
        .addField("m!mcskin", "Vamos ver skins de Minecraft.\n*Let's see Minecraft skins.*")
        .addField("m!mchead", "Vamos ver cabeças de Minecraft.\n*Let's see Minecraft heads.*")
        .addField("m!8ball", "Vamos jogar ao 8ball?\n*Let's go play 8ball?*")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/549567670782132224/Mamilos_Club_-_Logo__Imagem_2019_-_Diversao.png")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor(client.cor) 

        message.channel.send(funEmbed)
}

module.exports.help = {
    name: "fun"}