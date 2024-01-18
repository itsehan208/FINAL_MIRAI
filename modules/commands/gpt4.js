const { Hercai } = require('hercai');
const herc = new Hercai();

module.exports.config = {

name: "aiv3",
version: "30.0.0",
hasPermssion: 0,
credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
description: "Ask questions to Ai",
usages: "ai [text]",
commandCategory: "Ai",
cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
const body, threadID, messageID } = event;

herc.question({ model: "v3-beta", content: args.join(" ") }) .then(response => {
api.sendMessage(response.reply, threadID, messageID);
      })
       .catch(error => {
console.error(`An error occurred ${error.message}`); 
     });
};