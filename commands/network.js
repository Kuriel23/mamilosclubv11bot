const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();
    let networkEmbed = new Discord.RichEmbed()
        .setTitle("Network de Mamilos Club <a:parceiro:481494006715514881>")
        .addField("Website", "[Link Website](https://mamilos.club)")
        .addField("Grupo Steam", "[Link Grupo Steam](https://steamcommunity.com/groups/mamilosclub)")
        .addField("Curador", "[Link Curador](https://store.steampowered.com/curator/25236715/)")
        .addField("Twitch", "[Link Twitch](https://www.twitch.tv/mamilosclub)")
        .addField("Grupo Facebook", "[Link Grupo Facebook](https://www.facebook.com/groups/mamilosclub)")
        .addField("Twitter", "[Link Twitter](https://twitter.com/MamilosClub)")
        .addField("Fanpage", "[Link Fanpage](https://www.facebook.com/mamilosclub)")
        .addField("Instagram", "[Link Instagram](https://www.instagram.com/mamilosclubsteam)")
        .addField("Youtube", "[Link Youtube](https://www.youtube.com/c/MamilosClubSteam)")
        .addField("Discord", "[Link Discord](https://discord.gg/mamilosclubsteam)")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/542060770507358258/Mamilos_Club_-_Logo__Imagem_2019_-_NetWork.png")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor(client.cor) 

        message.channel.send(networkEmbed)
}

module.exports.help = {
    name: "network"}