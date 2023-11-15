"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const config_1 = require("./config");
const index_1 = require("./controllers/index");
const client = new discord_js_1.Client({
    intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMessages, discord_js_1.GatewayIntentBits.MessageContent],
});
client.once(discord_js_1.Events.ClientReady, (c) => {
    console.log(`Ready!!!!@ Logged in as ${c.user.tag}`);
});
client.on("messageCreate", async (message) => {
    if (!message.author.bot) {
        const messageContent = message.content;
        console.log((0, index_1.tiktok)(messageContent));
        if ((0, index_1.tiktok)(messageContent)) {
            await message.reply({
                content: `Less tiktok more proxitok :robot: !\n${(0, index_1.tiktok)(messageContent)}`,
            });
        }
        if ((0, index_1.twitter)(messageContent)) {
            await message.reply({
                content: `Less twitter more nitter :robot: !\n${(0, index_1.twitter)(messageContent)}`,
            });
        }
    }
});
client.login(config_1.config.DISCORD_TOKEN);
