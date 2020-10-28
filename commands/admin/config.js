const { MESSAGES } = require("../../utils/constants");
 
module.exports.run = async (Dragon, message, args, settings) => {
  const getSetting = args[0];
  const newSetting = args.slice(1).join(" ");

  switch(getSetting) {
    case "prefix": {
      if (newSetting) {
        await Dragon.updateGuild(message.guild, {newSetting});
        return message.channel.send(`Prefix mis à jour: \`${settings.prefix}\` => \`${newSetting}\``);
      }
      message.channel.send(`Prefix actuel: \`${settings.prefix}\``)
    }
    case "logChannel": {
      if (newSetting) {
        await Dragon.updateGuild(message.guild, {newSetting});
        return message.channel.send(`logChannel mis à jour: \`${settings.logChannel}\` => \`${newSetting}\``);
      }
      message.channel.send(`logChannel actuel: \`${settings.logChannel}\``)
    }
    case "welcomeMessage": {
      if (newSetting) {
        await Dragon.updateGuild(message.guild, {newSetting});
        return message.channel.send(`welcomeMessage mis à jour: \`${settings.welcomeMessage}\` => \`${newSetting}\``);
      }
      message.channel.send(`welcomeMessage actuel: \`${settings.welcomeMessage}\``)
    }
  }
};
 
module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFIG;
