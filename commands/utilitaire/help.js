const { MESSAGES } = require("../../utils/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = (Dragon, message, args, settings) => {
    if (!args.length) {
    const embed1 = new MessageEmbed()
        .setColor("#000000")
        .setTitle("Help - DragonProtect")
        .setDescription(`Prefix : \`${settings.prefix}\`\nPlus d'info : \`${settings.prefix}help <nom_de_la_commande>\``)
        .addFields(
            { name: '**Commandes administrative**', value: "`eval`, `setup`.", inline: false },
            { name: '**Commandes autre**', value: "`shunen`.", inline: false },
            { name: '**Commandes moderation**', value: "`kick`, `ban`, `unban`, `mute`, `unmute`, `clear`.", inline: false },
            { name: '**Commandes utilitaires**', value: "`help`, `say`, `reload`.", inline: false },
            { name: '**Commandes reaction**', value: "`allemotions`.", inline: false }
        )
        .setFooter("DragonProtect - 1.0.0")
        .setTimestamp();

    message.channel.send(embed1);
    message.delete();

    } else {
    const command = Dragon.commands.get(args[0]) || Dragon.commands.find(command => command.help.aliases && command.help.aliases.includes(args[0]))
    if (!command) return message.reply("Cette commande n'existe pas.")

    const embed2 = new  MessageEmbed()
        .setColor("#000000")
        .setTitle(`Help - ${command.help.name}`)
        .setDescription(`Info sur la commande \`${command.help.name}\``)
        .addFields(
            { name: '**Alias**', value: `${command.help.aliases}`, inline: false },
            { name: '**Description**', value: `${command.help.description}`, inline: false },
            { name: '**Usage**', value: `Voici comment utiliser la commande: \`${settings.prefix}${command.help.name} ${command.help.usage}`, inline: false },
            { name: '**Permission**', value: `${command.help.permissions}.`, inline: false },
            { name: '**Cooldown**', value: `${command.help.cooldown}.`, inline: false }
        )
        .setFooter("DragonProtect - 1.0.0")
        .setTimestamp();

    return message.channel.send(embed2);
        };
};

module.exports.help = MESSAGES.COMMANDS.UTILITAIRE.HELP;

