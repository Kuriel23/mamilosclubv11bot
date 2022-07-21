const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!args[2]) return message.reply("Faça uma pergunta completa por favor!");
    let respostas = ["Todos os sinais apontam que sim...", "Sim!", "Desculpa, mas não.", "Pode ter certeza!", "É... então... vamos falar de outro assunto?", "Tá zuando, né? COM CERTEZA Não, cara, não...", "Claro que sim!", "Muito provavelmente Acho que sim...", "Pergunta á sua mãe", "Não me enche, cara!", "Sim, meu amor, claro que sim!", "Me deixa em paz...", "Ah pelo amor de deus!"];

    let resultado = Math.floor((Math.random() * respostas.length));

    message.channel.send(respostas[resultado])
}

module.exports.help = {
    name: "8ball"}