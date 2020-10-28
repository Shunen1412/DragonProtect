const { Client, Collection } = require('discord.js');
const { loadCommands,loadEvents } = require("./utils/loader");

const Dragon = new Client();
require("./utils/functions")(Dragon);
Dragon.config = require("./config");
Dragon.mongoose = require("./utils/mongoose");
["commands", "cooldowns"].forEach(x => Dragon[x] = new Collection());

loadCommands(Dragon);
loadEvents(Dragon);
Dragon.mongoose.init();

Dragon.login(Dragon.config.TOKEN);
