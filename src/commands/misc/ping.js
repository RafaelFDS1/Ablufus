module.exports = {
  name: "ping",
  description: "Replies with Pong!",
  devOnly: true,
  // testOnly: Boolean,
  // options: Object[],
  // deleted: Boolean,

  callback: (client, interaction) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
};
