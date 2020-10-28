const { MESSAGES } = require("../../utils/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = (Dragon, message, args) => {
    const user = message.mentions.users.first();
    const reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée.');
    user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas ou n'est pas sur le serveur.");
    message.delete();

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`)
        .setColor("#000000")
        .setDescription(`**Action** : kick\n**Raison** : ${reason}`)
        .setThumbnail(user.avatarURL())
        .setFooter(message.author.username, message.author.avatarURL())
        .setTimestamp();

    Dragon.channels.cache.get('746776850855886869').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;
