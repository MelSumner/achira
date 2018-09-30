const secret = require("./secret.js");
const responses = require("./responses.js");
const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  let messageContent = message.content.toLowerCase();
  if (message.author !== client.user) {
    if (messageContent.includes("guys")) {
      message.channel.send("Hey there, " + message.author + " - " + responses.GUYS_RESPONSE);
    } 
    if (messageContent.includes("fuck") || messageContent.includes("damn") || messageContent.includes("shit")) {
      message.channel.send("Hey there, " + message.author + " - " + responses.EXPLETIVE_RESPONSE);
    }
  }

});
 
client.login(secret.BOTTOKEN);