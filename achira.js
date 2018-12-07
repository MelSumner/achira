const Secret = require("./secret.js");
const Responses = require("./responses.js");
const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  let messageContent = message.content.toLowerCase();

  //if the message is not from the bot
  if (message.author !== client.user) {
    if (messageContent.includes("fuck") || messageContent.includes("damn") || messageContent.includes("shit")) {
      message.channel.send("Hey there, " + message.author + " - " + Responses.EXPLETIVE_RESPONSE);
    }
    //if someone is directly @ the bot
    if (messageContent.includes(client.user)) {
      if (messageContent.includes("hello")) {
        message.channel.send(message.author + " " + Responses.HELLO_RESPONSE);
      } else if (messageContent.includes("thank")) {
        message.channel.send(message.author + " " + Responses.THANK_RESPONSE);
      } else if (messageContent.includes("help")) {
        message.channel.send(message.author + " " + Responses.HELP_RESPONSE);
      } else {
        message.channel.send(message.author + " " + Responses.CAKE_RESPONSE);
      }
    }
  }

});
 
client.login(Secret.BOT_TOKEN);