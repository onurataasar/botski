require("dotenv").config();
const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  PermissionsBitField,
  Permissions,
} = require(`discord.js`);
const axios = require("axios");
var kelime = require("rastgelekelime");
const prefix = "dinoli ";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.on("ready", () => {
  console.log(`${client.user.tag} olarak oturum açıldı.`);
  client.user.setActivity(`Her şey tıkırında`, { type: "WATCHING" });
});

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  //messages

  const messageArray = message.content.split(" ");
  const argument = messageArray.slice(1);
  const cmd = messageArray[0];

  //commands

  switch (command) {
    case "bağır":
      message.channel.send("AAAAAAAAAAAAAAAAA");
      break;
    case "konuş":
      message.channel.send(kelime());
      break;
  }
});

client.login(process.env.CLIENT_TOKEN);
