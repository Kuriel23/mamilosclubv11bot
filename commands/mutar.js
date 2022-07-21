const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Felizmente!Não posso mutar o usuário!");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Aff mano!!Não consegui achar o usuário que bosta!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Aff mano!!Não consegui achar o usuário que bosta!");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("Por favor, adicione um motivo!");

  let muterole = message.guild.roles.find(`name`, "Muted");
  let membrorole = message.guild.roles.find(`name`, "Membros");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.reply("Tá calma... Ops, Quanto tempo de mute caramba?");

  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Você foi mutado por ${mutetime}.`)
  }catch(e){
    message.channel.send(`O Usuário foi mutado... porém a DM tava bloqueada. Ele foi mutado por ${mutetime}`)
  }

  let muteEmbed = new Discord.RichEmbed()
  .setDescription("Mute")
  .setColor("#4B0082")
  .addField("Usuário:", tomute)
  .addField("Por:", `${message.author}`)
  .addField("Tempo", mutetime)
  .addField("Motivo:", reason);

  let channel = message.guild.channels.find(c => c.name === "reports");
  if(!channel) return message.reply("Erro: Canal não encontrado");
  channel.send(muteEmbed);

  await(tomute.addRole(muterole.id));
  await(tomute.removeRole(membrorole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    tomute.addRole(membrorole.id);
  }, ms(mutetime));


}

module.exports.help = {
  name: "mutar"
}