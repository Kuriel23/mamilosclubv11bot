const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
  let reportadoUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!reportadoUser) return message.channel.send("Usuário Não encontrado");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
    .setDescription("1 report chegou!Atenda-o(a)\n Reaja com as seguintes reações se o report foi aceitado/negado. Aceitado - ✅ Negado - ❎")
    .setColor(client.cor)
    .addField("😡Membro Reportado:", `${reportadoUser}`)
    .addField("👥Membro que Reportou:", `${message.author}`)
    .addField("🖨Motivo:", reason);

  //return message.channel.send(reportEmbed);
  let reportsChannel = message.guild.channels.find(`name`, "reports") 
  if(!reportsChannel) return message.channel.send("Erro: Canal para mandar report não encontrado");

  message.delete().catch(O_o=>{});

  reportsChannel.send("@here Report foi enviado!")
  return reportsChannel.send({embed: reportEmbed}).then(embedMessage => {
    embedMessage.react("✅");
    embedMessage.react("❎");
});
}


module.exports.help = {
  name : "report"
}