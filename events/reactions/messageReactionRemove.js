module.exports = (Dragon, messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '726805667700277392');
  const joieRole = message.guild.roles.cache.get("768463105230766101");
  const tristesseRole = message.guild.roles.cache.get("768463197967089664");
  const peurRole = message.guild.roles.cache.get("768463251532152873");
  const colereRole = message.guild.roles.cache.get("768463309597835335");
  const surpriseRole = message.guild.roles.cache.get("768463392561954848");
  const degoutRole = message.guild.roles.cache.get("768463447096295454");
  if (member.user.bot) return;

  if (["Dragon_Joie", "Dragon_Tristesse", "Dragon_Peur", "Dragon_Colere", "Dragon_Surprise", "Dragon_Degout"].includes(emoji) && message.channel.id === channel.id) {
    switch (emoji) {
      case "Dragon_Joie":
        member.roles.remove(joieRole);
        break;
      case "Dragon_Tristesse":
        member.roles.remove(tristesseRole);
        break;
      case "Dragon_Peur":
        member.roles.remove(peurRole);
        break;
      case "Dragon_Colere":
        member.roles.remove(colereRole);
        break;
      case "Dragon_Surprise":
        member.roles.remove(surpriseRole);
        break;
      case "Dragon_Degout":
        member.roles.remove(degoutRole);
        break;
    };
  };
}