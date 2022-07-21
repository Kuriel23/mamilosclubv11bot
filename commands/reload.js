const Discord = require("discord.js")
const botconfig = require("./JSON/config.json");


module.exports.run = async (bot, message, args) => {

    if(message.author.id = "354233941550694400", "280045261173293058") return message.channel.send("Eu recarreguei o comando que você pediu!")

    if(!args[1]) return message.channel.send("Por favor, forneça um comando para dar reload!")

    let commandName = args[1].toLowerCase()

    try {
        delete require.cache[require.resolve(`./${commandName}.js`)]
        bot.commands.delete(commandName)
        const pull = require(`./commands/${commandName}.js`)
        bot.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`Não foi possível dar reload: \`${args[1].toUpperCase()}\``)
    }

    message.channel.send(`O comando \`${args[1].toUpperCase()}\` foi reloadado!`)

}


module.exports.config = {
    name: "reload"}