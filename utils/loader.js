const { readdirSync } = require("fs");

const loadCommands = (Dragon, dir = "./commands/") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`../${dir}/${dirs}/${file}`);
      Dragon.commands.set(getFileName.help.name, getFileName);
      console.log(`Commande chargée: ${getFileName.help.name}`);
    };
  });
};

const loadEvents = (Dragon, dir = "./events/") => {
  readdirSync(dir).forEach(dirs => {
    const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const event of events) {
      const evt = require(`../${dir}/${dirs}/${event}`);
      const evtName = event.split(".")[0];
      Dragon.on(evtName, evt.bind(null, Dragon));
      console.log(`Events chargée: ${evtName}`);
    };
  });
};

module.exports = {
  loadCommands,
  loadEvents,
};