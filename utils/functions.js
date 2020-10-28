const mongoose = require("mongoose");
const { Guild } = require("../models/index")

module.exports = async Dragon => {
  Dragon.createGuild = async guild => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild);
    const createGuild = await new Guild(merged);
    createGuild.save().then(g => console.log(`${g.guildName} a ajouter DragonProtect.`));
  };

  Dragon.getGuild = async guild => {
    const data = await Guild.findOne({ guildID: guild.id });
    if (data) return data;
    return Dragon.config.defaultSettings;
  };

  Dragon.updateGuild = async (guild, settings) => {
    let data = await Dragon.getGuild(guild);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  }
};