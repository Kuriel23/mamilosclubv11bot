const Discord = require('discord.js');
const config = require('./commands/JSON/config.json');

const client = new Discord.Client({
    autoReconnect: true
});
client.prefix = config.prefix;
client.cor = config.cor;

client.on("message", async message => {
    if(message.author.bot) return; 
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
        return message.reply("MEU DEUS DO CEUUUUUU PORQUE VOCÊ ME MARCOU PRONTO VOU TE DIZER O COMANDO DE AJUDA É **m!ajuda**!!!")}
    if(!message.content.startsWith(config.prefix)) return;

    
let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
try {
      let commandFile = require(`./commands/${command}.js`);
      delete require.cache[require.resolve(`./commands/${command}.js`)];
      return commandFile.run(client, message, args);
  } catch (err) {
        console.error("Erro:" + err)
  }
})

client.on("ready", () => {
    console.log(`Bot foi iniciado com, ${client.users.size} usuários, ${client.guilds.size} servidores, ${client.channels.size} canais.`)

        client.user.setActivity(`m!ajuda para ajuda`)

})

client.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD") return
    if(dados.d.message_id != "601055610796113931") return
 
    let servidor = client.guilds.get("293944864893042688")
    let membro = servidor.members.get(dados.d.user_id)
 
    let Membros = servidor.roles.get('538442496988938282')
 
    if(dados.t === "MESSAGE_REACTION_ADD"){
     
        if(dados.d.emoji.id === "542064160872202246"){
         if(membro.roles.has(Membros)) return
            membro.addRole(Membros)
          }
    }

})
 
client.on('raw', async dados => {
  if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
  if(dados.d.message_id != "600683988427735050") return
 
  let servidor = client.guilds.get("293944864893042688")
  let membro = servidor.members.get(dados.d.user_id)
 
  let Apex = servidor.roles.get('545381079025057817'),
      Rust = servidor.roles.get('482212475404812288'),
      Fortnite = servidor.roles.get('478557615656402945'),
      Scum = servidor.roles.get('486663774707777542'),
      Overwatch = servidor.roles.get('478557613303529472'),
      Battlefield = servidor.roles.get('480154390661955601'),
      Warframe = servidor.roles.get('478557619867615232'),
      LOL = servidor.roles.get('478557617539514387'),
      GTA = servidor.roles.get('478557825988296716'),
      DBD = servidor.roles.get('566986334242340864'),
      CSGO = servidor.roles.get('478557613399736320'),
      PUBG = servidor.roles.get('419902586527678465')
 
  if(dados.t === "MESSAGE_REACTION_ADD"){
   
      if(dados.d.emoji.id === "545572755794427905"){
          if(membro.roles.has(Apex)) return
          membro.addRole(Apex)
      }else if(dados.d.emoji.id === "482515068630597633"){
          if(membro.roles.has(Rust)) return
          membro.addRole(Rust)
      }else if(dados.d.emoji.id === "482913627913846786"){
          if(membro.roles.has(Fortnite)) return
          membro.addRole(Fortnite)
        }else if(dados.d.emoji.id === "489204462166999041"){
            if(membro.roles.has(Scum)) return
            membro.addRole(Scum)
        }else if(dados.d.emoji.id === "482514645664399362"){
            if(membro.roles.has(Overwatch)) return
            membro.addRole(Overwatch)
        }else if(dados.d.emoji.id === "482517177790889984"){
            if(membro.roles.has(Battlefield)) return
            membro.addRole(Battlefield)
        }else if(dados.d.emoji.id === "482515378975801347"){
            if(membro.roles.has(Warframe)) return
            membro.addRole(Warframe)
        }else if(dados.d.emoji.id === "482515623990263818"){
            if(membro.roles.has(LOL)) return
            membro.addRole(LOL)
        }else if(dados.d.emoji.id === "485859427505799179"){
            if(membro.roles.has(GTA)) return
            membro.addRole(GTA)
        }else if(dados.d.emoji.id === "482514996425654294"){
            if(membro.roles.has(DBD)) return
            membro.addRole(DBD)
        }else if(dados.d.emoji.id === "482515768630706176"){
            if(membro.roles.has(CSGO)) return
            membro.addRole(CSGO)
        }else if(dados.d.emoji.id === "482514918378045451"){
            if(membro.roles.has(PUBG)) return
            membro.addRole(PUBG)
        }
  }
  if(dados.t === "MESSAGE_REACTION_REMOVE"){
    if(dados.d.emoji.id === "545572755794427905"){
        if(membro.roles.has(Apex)) return
        membro.removeRole(Apex)
    }else if(dados.d.emoji.id === "482515068630597633"){
        if(membro.roles.has(Rust)) return
        membro.removeRole(Rust)
    }else if(dados.d.emoji.id === "482913627913846786"){
        if(membro.roles.has(Fortnite)) return
        membro.removeRole(Fortnite)
      }else if(dados.d.emoji.id === "489204462166999041"){
          if(membro.roles.has(Scum)) return
          membro.removeRole(Scum)
      }else if(dados.d.emoji.id === "482514645664399362"){
          if(membro.roles.has(Overwatch)) return
          membro.removeRole(Overwatch)
      }else if(dados.d.emoji.id === "482517177790889984"){
          if(membro.roles.has(Battlefield)) return
          membro.removeRole(Battlefield)
      }else if(dados.d.emoji.id === "482515378975801347"){
          if(membro.roles.has(Warframe)) return
          membro.removeRole(Warframe)
      }else if(dados.d.emoji.id === "482515623990263818"){
          if(membro.roles.has(LOL)) return
          membro.removeRole(LOL)
      }else if(dados.d.emoji.id === "485859427505799179"){
          if(membro.roles.has(GTA)) return
          membro.removeRole(GTA)
      }else if(dados.d.emoji.id === "482514996425654294"){
          if(membro.roles.has(DBD)) return
          membro.removeRole(DBD)
      }else if(dados.d.emoji.id === "482515768630706176"){
          if(membro.roles.has(CSGO)) return
          membro.removeRole(CSGO)
      }else if(dados.d.emoji.id === "482514918378045451"){
          if(membro.roles.has(PUBG)) return
          membro.removeRole(PUBG)
        }
  }
 
})

client.on('message', msg => {
  if (msg.author.id === client.user.id) return;  
  if (msg.content.startsWith('vixe')) {
      msg.channel.send('vixe');
    }
});

client.on('message', msg => {
  if (msg.author.id === client.user.id) return;  
  if (msg.content.startsWith('oxe')) {
      msg.channel.send('oxe');
    }
});

client.on('message', msg => {
    if (msg.content.startsWith('bom dia')) {
      msg.reply('Dia');
    }
});

client.on('message', msg => {
    if (msg.content.startsWith('boa tarde')) {
      msg.reply('Tarde');
    }
});

client.on('message', msg => {
    if (msg.content.startsWith('boa noite')) {
      msg.reply('Noite');
    }
});

client.on('message', msg => {
  if (msg.author.id === client.user.id) return;  
  if (msg.content.startsWith('eita')) {
      msg.channel.send('eita');
    }
});

client.login(config.token)