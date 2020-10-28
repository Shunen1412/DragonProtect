const { MESSAGES } = require("../../utils/constants");

module.exports.run = (Dragon, message, args) => {
    message.channel.send(args.join(" "));
    message.delete();
};

module.exports.help = MESSAGES.COMMANDS.UTILITAIRE.SAY;
