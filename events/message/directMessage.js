const { MessageEmbed } = require("discord.js");

module.exports = (Dragon, message) => {
  if (message.author.bot) return;
  const embed = new MessageEmbed()
        .setAuthor(`${message.author.username} (${message.author.id})`)
        .setColor("#000000")
        .setDescription(`**Action** : demande de support\n**Raison** : ${message.content}\n**Utilisateur** : ${message.author}`)
        .setThumbnail(message.author.avatarURL())
        .setFooter(message.author.username, message.author.avatarURL())
        .setTimestamp();;

    message.author.send("Nous avons reçu votre demande de support, nous allons vous repondre dans les plus bref délais.")
    Dragon.channels.cache.get('739075831665786881').send(embed);
}