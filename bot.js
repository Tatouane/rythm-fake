const discord = require('discord.js');
const Client = new discord.Client({intents:[32767]});
let prefix = 'r!'

Client.on('messageCreate', message =>{
    //---------------Everyone Role Add Command-------------
    if(message.content.startsWith(`${prefix}add-role everyone`)){
        if(message.member.permissions.has('MANAGE_ROLES')){
            let args = message.content.split(" ");
            let roleID = args.slice(2).join(" ");
            let role = message.guild.roles.cache.find(r => r.id === `${roleID}`);
            
            if (!role) return message.channel.send(`Veuillez mentionner un rôle.`)
            message.guild.members.cache.filter(m => !m.user.bot && !m.roles.has('939862322472710164') && !m.roles.has('937015514973216808').forEach(member => member.roles.add(role.id))
            message.channel.send(`${message.author} a ajouté le rôle ${role.name} à tout les membres.`)
        }else{
            message.reply("Vous n'avez pas les permissions modérateur.");
        }
    }
    //---------------Everyone Role Remove Command-------------
    if(message.content.startsWith(`${prefix}remove-role everyone`)){
        if(message.member.permissions.has('MANAGE_ROLES')){
            let args = message.content.split(" ");
            let roleID = args.slice(2).join(" ");
            let role = message.guild.roles.cache.find(r => r.id === `${roleID}`);
            
            if (!role) return message.channel.send(`Veuillez mentionner un rôle.`)
            message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.remove(role))
            message.channel.send(`${message.author} a enlevé le rôle ${role.name} à tout les membres.`)
        }else{
            message.reply("Vous n'avez pas les permissions modérateur.");
        }
    }
})

Client.on('ready', Client =>{
    console.log('Fake bot ready')
})

Client.login(process.env.TOKEN);
