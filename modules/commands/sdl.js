module.exports.config = {
  name: "status",
  version: "30.0.10",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "Random Love Status",
  commandCategory: "Random",
  usages: "status",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://videos-api.mcs-badol-bot-007.repl.co/video/status').then(res => {
  // let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body: `☆《STATUS VIDEO》☆`,
            attachment: fs.createReadStream(__dirname + `/cache/sadvideo.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sadvideo.mp4`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/sadvideo.mp4`)).on("close", callback);
      })
}