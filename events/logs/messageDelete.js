const { MessageEmbed } = require("discord.js");

module.exports = async (Dragon, message) => {
  const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
    limite : 1,
    type : 'MESSAGE_DELETE'
  })

  const latestMessageDeleted = fetchGuildAuditLogs.entries.first();
  const { executor } = latestMessageDeleted;

  const embed = new MessageEmbed()
        .setAuthor(`Suppression d'un message`)
        .setColor("#000000")
        .setDescription(`**Action** : suppression de message\n**Message supprimé** : ${message.content}\n**Auteur du message** : ${message.author}\n**Salon** : ${message.channel}`)
        .setFooter(executor.username, executor.displayAvatarURL())
        .setTimestamp();

    Dragon.channels.cache.get('746776850855886869').send(embed);
}
