var calls = [];
const ablufus = (client) => {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ablufus") {
      let actualCall;
      for (let i = 0; i < calls.length; i++) {
        if (interaction.user.id == calls[i].userid) {
          calls[i].calls++;
          actualCall = calls[i];
          break;
        }
      }

      if (actualCall) {
        switch (actualCall.calls) {
          case 3:
            await interaction.reply(
              "You really like to be such pussy man, dawg. Please, stop calling me, son of a bitch."
            );
            return;
        }
      }

      calls.push({
        userid: interaction.user.id,
        calls: 1,
      });
      await interaction.reply("Hey, you are a sun of a B I T C H !");
    }
  });
};

export default ablufus;
