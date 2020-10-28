const { MessageEmbed } = require("discord.js");

module.exports = async (Dragon, channel) => {;
  if (channel.type === "dm") return;
  else {
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
    limite : 1,
    type : 'CHANNEL_CREATE'
  })

  const latestChannelCreated = fetchGuildAuditLogs.entries.first();
  const { executor } = latestChannelCreated;

  const embed = new MessageEmbed()
        .setAuthor(`Création d'un salon`)
        .setColor("#000000")
        .setDescription(`**Action** : création de salon\n**Salon créé** : ${channel.name}\n**Type de salon** : ${channel.type}`)
        .setFooter(executor.username, executor.displayAvatarURL())
        .setTimestamp();

    Dragon.channels.cache.get('746776850855886869').send(embed);
  }
}
  