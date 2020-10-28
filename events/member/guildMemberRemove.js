const { MessageEmbed } = require("discord.js");

module.exports = (Dragon, member) => {
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#000000")
    .addField('**Un membre viens de quitté le serveur**', `${member.displayName} a quitté le serveur`, true)
    .setFooter("DragonProtect - 1.0.0")
    .setTimestamp();

  Dragon.channels.cache.get('726805667700277392').send(embed);
}
