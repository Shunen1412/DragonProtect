const { Collection } = require('discord.js');

module.exports = async (Dragon, message) => {
  const settings = await Dragon.getGuild(message.guild);
  if (message.channel.type === "dm") return Dragon.emit("directMessage", message);
  if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

  const args = message.content.slice(settings.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const user = message.mentions.users.first();

  const command = Dragon.commands.get(commandName) || Dragon.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return;
 
  if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.reply("Vous n'avez pas les permissions requise");

  if (command.help.args && !args.length) {
    let noArgsReply = `Veuiller saisir un argument ${message.author}`;

    if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande: \`${settings.prefix}${command.help.name} ${command.help.usage}\``;

    return message.channel.send(noArgsReply);
  }

  if (command.help.isUserAdmin && !user) return message.reply('Veuillez mentionner un utilisateur.');

  if (command.help.isUserAdmin && message.guild.member(user).hasPermission('BAN_MEMBERS')) return message.reply("Vous ne pouvez pas sanctionner un membre du staff.");
  
  if (!Dragon.cooldowns.has(command.help.name)) {
    Dragon.cooldowns.set(command.help.name, new Collection());
  }

  const timeNow = Date.now();
  const tStamps = Dragon.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 10) *1000;

  if (tStamps.has(message.author.id)) {
    const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

    if (timeNow < cdExpirationTime) {
      timeLeft = (cdExpirationTime - timeNow) / 1000;
      return message.reply(`Veuiller attendre ${timeLeft.toFixed(0)} seconde(s) anvant de ré-utiliser la commande \`${command.help.name}\`.`)
    }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  command.run(Dragon, message, args, settings);
}