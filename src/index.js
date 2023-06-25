const { Client, Events } = require("discord.js");

const client = new Client({
  intents: [],
});

client.on(Events.ClientReady, () => {
  console.log(`[🚀] ${client.user.username} - is ready to work!`);
});

client.login("token");
