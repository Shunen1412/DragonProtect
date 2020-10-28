const { MESSAGES } = require("../../utils/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (Dragon, message, args) => {
  if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply("Il faut argumenter d'un nombre entre 1 et 100");

  const messages = await message.channel.messages.fetch({
    limite: Math.min(args[0], 100),
    before: message.id,
  });

  message.delete();
  await message.channel.bulkDelete(messages);

    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setColor("#000000")
        .setDescription(`**Action** : clear\n**Nombre de messages** : ${args[0]}\n**Salon** : ${message.channel}`)
        .setFooter("DragonProtect - 1.0.0")
        .setTimestamp();

    Dragon.channels.cache.get('746776850855886869').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.CLEAR;
