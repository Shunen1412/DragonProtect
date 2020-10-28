const { MessageEmbed } = require("discord.js");

module.exports = async (Dragon, channel) => {
  const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
    limite : 1,
    type : 'CHANNEL_DELETE'
  })

  const latestChannelDeleted = fetchGuildAuditLogs.entries.first();
  const { executor } = latestChannelDeleted;

  const embed = new MessageEmbed()
        .setAuthor(`Suppression d'un salon`)
        .setColor("#000000")
        .setDescription(`**Action** : suppression de salon\n**Salon supprimé** : ${channel.name}\n**Type de salon** : ${channel.type}`)
        .setFooter(executor.username, executor.displayAvatarURL())
        .setTimestamp();

    Dragon.channels.cache.get('746776850855886869').send(embed);
}
