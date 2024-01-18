const axios = require('axios');
const { Readable } = require('stream');

module.exports.config = {
  name: "meme",
  version: "1.0",
  hasPermission: 0,
  credits: "Rickciel",
  usePrefix: true,
  description: "DARK MEME",
  commandCategory: "Fun",
  cooldowns: 2,
};

module.exports.run = async ({ api, event, args }) => {
  try {
    const response = await axios.get('https://api31.chatbotmesss.repl.co/api/meme', {
      responseType: 'stream',
    });


    api.sendMessage(
      {
        body: "A Random Meme For You 😐",
        attachment: response.data,
      },
      event.threadID
    );
  } catch (error) {
    console.error(error);
    api.sendMessage("Error fetching memes.", event.threadID, event.messageID);
  }
};
 