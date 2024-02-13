var calls = 0;

const ablufus = (client) => {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ablufus") {
      switch (calls) {
        case 10:
          await interaction.reply(
            "You really like to be such pussy man, dawg. Please, stop calling me, son of a bitch."
          );
          return;
      }
      await interaction.reply("Hey, you are a sun of a B I T C H !");
      calls++;
    }
  });
};

export default ablufus;
