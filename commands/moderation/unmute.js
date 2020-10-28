const { MESSAGES } = require("../../utils/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = (Dragon, message, args) => {
    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
    message.delete();

    if (!user.roles.cache.has(muteRole.id)) return message.reply("l'utilisateur mentionné n'est pas mute.");
    user.roles.remove(muteRole.id);
    message.channel.send(`<@${user.id}> est desormais unmute et peux parler.`);

    const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} (${user.id})`)
        .setColor("#000000")
        .setDescription(`**Action** : unmute`)
        .setThumbnail(user.user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL())
        .setTimestamp();

    Dragon.channels.cache.get('746776850855886869').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNMUTE;
