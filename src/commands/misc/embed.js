const {
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
} = require("@discordjs/builders");
const {
  ApplicationCommandOptionType,
  ButtonStyle,
  ComponentType,
} = require("discord.js");

module.exports = {
  name: "embed",
  description: "Creates an embed based on user's options.",
  testOnly: true,
  options: [
    {
      name: "ttl",
      description: "The title of embed",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "dsc",
      description: "The description of embed",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "r",
      description: "Red from RGB for setting up color",
      type: ApplicationCommandOptionType.Number,
    },
    {
      name: "g",
      description: "Green from RGB for setting up color",
      type: ApplicationCommandOptionType.Number,
    },
    {
      name: "b",
      description: "Blue from RGB for setting up color",
      type: ApplicationCommandOptionType.Number,
    },
  ],
  callback: async (client, interaction) => {
    const options = interaction.options;
    const RGBTuple = [
      options.getNumber("r") || 150,
      options.getNumber("g") || 145,
      options.getNumber("b") || 250,
    ];
    const embed = new EmbedBuilder()
      .setTitle(options.getString("ttl"))
      .setDescription(options.getString("dsc"))
      .setColor(RGBTuple);

    const confirm = new ButtonBuilder()
      .setCustomId("confirm")
      .setLabel("Add another field")
      .setStyle(ButtonStyle.Success);

    const finish = new ButtonBuilder()
      .setCustomId("finish")
      .setLabel("Finish")
      .setStyle(ButtonStyle.Secondary);

    const row = new ActionRowBuilder().addComponents(confirm, finish);

    const reply = await interaction.reply({
      embeds: [embed],
      fetchReply: true,
      components: [row],
    });

    const filter = (i) => i.user.id === interaction.user.id;

    const collector = reply.createMessageComponentCollector({
      componentType: ComponentType.Button,
      filter,
    });

    collector.on("collect", (i) => {
      switch (i.customId) {
        case "confirm":
          i.reply(`you've clicked on the confirm button`);
          break;
        case "finish":
          i.reply(`you've clicked on the finish button`);
      }
    });
  },
};
