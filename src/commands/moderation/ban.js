const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  name: "ban",
  description: "Bans a member from the server.",
  // devOnly: Boolean,
  // testOnly: Boolean,
  // deleted: Boolean,
  options: [
    {
      name: "user",
      description: "The user to ban",
      require: true,
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: "reason",
      description: "The reason for banning.",
      type: ApplicationCommandOptionType.String,
    },
  ],
  permissionsRequired: [PermissionFlagsBits.BanMembers],
  botPermissions: [PermissionFlagsBits.BanMembers],

  callback: (client, interaction) => {
    interaction.reply(`ban...`);
  },
};
