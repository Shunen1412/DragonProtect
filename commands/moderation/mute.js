const ms = require("ms");
const { MESSAGES } = require("../../utils/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (Dragon, message, args) => {
    let user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
    let muteTime = (args[1] || '60s');

    if (!muteRole) {
        muteRole = await message.guild.roles.create({
            data: {
                name: 'muted',
                color: '#DCDCDC',
                permissions: []
            }
        });

        message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.updateOverwrite(muteRole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                CONNECT: false
            });
        });
    };

    await user.roles.add(muteRole.id);
    message.channel.send(`<@${user.id}> a été mute pour ${ms(ms(muteTime))}.`);

    setTimeout(() => {
        user.roles.remove(muteRole.id);
    }, ms(muteTime));
    message.delete();

    const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} (${user.id})`)
        .setColor("#000000")
        .setDescription(`**Action** : mute\n**Temps** : ${muteTime}`)
        .setThumbnail(user.user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL())
        .setTimestamp();

    Dragon.channels.cache.get('746776850855886869').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.MUTE;
