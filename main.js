import { Client, Events, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import { load, reloadCommands } from "./config/config.js";

const envs = process.env;
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

reloadCommands(envs);

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

load(client);

client.login(envs.TOKEN);
