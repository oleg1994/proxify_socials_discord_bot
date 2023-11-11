import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "./config";
import { tiktok, twitter } from "./controllers/index";
// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (!message.author.bot) {
    const messageContent = message.content;
    console.log(tiktok(messageContent));
    if (tiktok(messageContent)) {
      await message.reply({
        content: `Less tiktok more proxitok :robot: !\n${tiktok(messageContent)}`,
      });
    }

    if (twitter(messageContent)) {
      await message.reply({
        content: `Less twitter more nitter :robot: !\n${twitter(messageContent)}`,
      });
    }
  }
});
client.login(config.DISCORD_TOKEN);
