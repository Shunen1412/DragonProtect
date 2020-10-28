const { MESSAGES } = require("../../utils/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = (Dragon, message, args) => {
    const embed1 = new MessageEmbed()
        .setColor("#000000")
        .setTitle("Shunen - DragonProtect")
        .addFields(
            { name: '**Shunen est le createur de ce bot**', value: "shunen = bg", inline: false },
        )
        .setFooter("DragonProtect - 1.0.0")
        .setTimestamp();

    message.channel.send(embed1);
    message.delete();
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.SHUNEN;
