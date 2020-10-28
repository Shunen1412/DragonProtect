module.exports = async (Dragon, guild) => {
  const newGuild = {
    guildID: guild.id,
    guildName: guild.name
  };

  await Dragon.createGuild(newGuild);
};
