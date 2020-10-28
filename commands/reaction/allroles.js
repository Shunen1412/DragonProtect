const { MESSAGES } = require("../../utils/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = (Dragon, message, args) => {
  const joieRole = message.guild.roles.cache.get("768463105230766101");
  const tristesseRole = message.guild.roles.cache.get("768463197967089664");
  const peurRole = message.guild.roles.cache.get("768463251532152873");
  const colereRole = message.guild.roles.cache.get("768463309597835335");
  const surpriseRole = message.guild.roles.cache.get("768463392561954848");
  const degoutRole = message.guild.roles.cache.get("768463447096295454");
  const joieEmoji = message.guild.emojis.cache.get("768200951861084210");
  const tristesseEmoji = message.guild.emojis.cache.get("768201197470613504");
  const peurEmoji = message.guild.emojis.cache.get("768201031463993364");
  const colereEmoji = message.guild.emojis.cache.get("768201087114674196");
  const surpriseEmoji = message.guild.emojis.cache.get("768201270157639741");
  const degoutEmoji = message.guild.emojis.cache.get("768201327499018309");

  message.delete();
  const embed = new MessageEmbed()
    .setTitle("Tableau des émotions")
    .setColor("#000000")
    .setDescription("**Veuillez choisir une émotions qui definira votre parcours sur le serveur.**")
    .addField(
      "Les émotions disponibles:",
      `
      ${joieEmoji} - ${joieRole.toString()}
      ${tristesseEmoji} - ${tristesseRole.toString()}
      ${peurEmoji} - ${peurRole.toString()}
      ${colereEmoji} - ${colereRole.toString()}
      ${surpriseEmoji} - ${surpriseRole.toString()}
      ${degoutEmoji} - ${degoutRole.toString()}
      `,
      false
    )

    Dragon.channels.cache.get('726805667700277392').send(embed).then(async msg =>{
      await msg.react(joieEmoji);
      await msg.react(tristesseEmoji);
      await msg.react(peurEmoji);
      await msg.react(colereEmoji);
      await msg.react(surpriseEmoji);
      await msg.react(degoutEmoji);
    })
};

module.exports.help = MESSAGES.COMMANDS.REACTION.ALLROLES;
