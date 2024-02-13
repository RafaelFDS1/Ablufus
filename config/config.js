import { REST, Routes, SlashCommandBuilder } from "discord.js";
import ablufus from "../commands/ablufus/ablufus.js";
import ping from "../commands/ping/ping.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "ablufus",
    description: "Call ablufus",
  },
];

const reloadCommands = async (envs) => {
  const rest = new REST({ version: "10" }).setToken(envs.TOKEN);

  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(envs.CLIENT_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};

const load = (client) => {
  ping(client);
  ablufus(client);
};

export { load, reloadCommands };
