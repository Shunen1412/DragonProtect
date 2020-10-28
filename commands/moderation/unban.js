const { MESSAGES } = require("../../utils/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (Dragon, message, args) => {
    const user = await Dragon.users.fetch(args[0]);
    if (!user) return message.reply("Veuillez ajouter l'id d'un utilisateur existant.");
    message.guild.members.unban(user);
    message.delete();

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`)
        .setColor("#000000")
        .setDescription(`**Action** : unban`)
        .setThumbnail(user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL())
        .setTimestamp();

    Dragon.channels.cache.get('746776850855886869').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNBAN;