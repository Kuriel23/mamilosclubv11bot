const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    message.delete();
    let rulesEmbed = new Discord.RichEmbed()
        .setTitle("*Mamilos Club Rules* <a:parceiro:481494006715514881>")
        .addField("*<a:squad:478569011857195019> We appreciate a place with real people. Please keep your Steam account linked to your Discord.*", "*<a:squad:478569011857195019> No referral links (Gleam, Tremor, etc).*")
        .addField("*<a:squad:478569011857195019> No spam, flood, spoiler or post inappropriate content +18.*", "*<a:squad:478569011857195019> No begging or ask for free products (keys, roles, etc).*")
        .addField("*<a:squad:478569011857195019> No racism, religious discussions or talk about politics.*", "*<a:squad:478569011857195019> No advertising, request permission to promote your content. Partners have a specific channel for this.*")
        .addField("*<a:squad:478569011857195019> Use the correct text/voice channel for the purpose of your conversation.*", "*<a:squad:478569011857195019> It is forbidden to harass, solicit favors or promote in private messages and in the channels of other members of the server.*")
        .setImage("https://cdn.discordapp.com/attachments/540681279406997536/541675991911759909/Mamilos_Club_-_Logo__Imagem_2019_-_Regras.png")
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor(client.cor) 

        message.channel.send(rulesEmbed)
}

module.exports.help = {
    name: "rules"}