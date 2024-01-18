const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "rmbg",
  version: "2.7",
  hasPermission: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "𝙍𝙚𝙢𝙤𝙫𝙚 𝘽𝙖𝙘𝙠𝙜𝙧𝙤𝙪𝙣𝙙 𝙋𝙝𝙤𝙩𝙤",
  commandCategory: "Tools",
  usages: `${global.config.PREFIX}rmbg`,
  cooldown: 3,
};

module.exports.run = async function({ api, event, args }) {
  try {
    const response = await axios.get("https://hazeyy-apis-combine.kyrinwu.repl.co");
    if (response.data.hasOwnProperty("error")) {
      return api.sendMessage(response.data.error, event.threadID, event.messageID);
    }

    let pathie = __dirname + `/cache/canvas/removed_bg.jpg`;
    const { threadID, messageID } = event;

    let photoUrl = event.messageReply ? event.messageReply.attachments[0].url : args.join(" ");

    if (!photoUrl) {
      api.sendMessage("𝙿𝚕𝚎𝚊𝚜𝚎 𝚁𝚎𝚙𝚕𝚢 𝙾𝚗𝚎 𝙿𝚑𝚘𝚝𝚘 𝚃𝚘 𝚁𝚎𝚖𝚘𝚟𝚎 𝚃𝚑𝚎 𝙱𝚊𝚌𝚔𝚐𝚛𝚘𝚞𝚗𝚍 - ⚠️", threadID, messageID);
      return;
    }

    api.sendMessage("𝚁𝚎𝚖𝚘𝚟𝚒𝚗𝚐 𝚃𝚑𝚎 𝙱𝚊𝚌𝚔𝚐𝚛𝚘𝚞𝚗𝚍 𝚃𝚘 𝚃𝚑𝚎 𝙿𝚑𝚘𝚝𝚘 - ♻️", threadID, async () => {
      try {
        const response = await axios.get(`https://hazeyy-apis-combine.kyrinwu.repl.co/api/try/removebg?url=${encodeURIComponent(photoUrl)}`);
        const processedImageURL = response.data.image_data;

        const img = (await axios.get(processedImageURL, { responseType: "arraybuffer" })).data;

        fs.writeFileSync(pathie, Buffer.from(img, 'binary'));

        api.sendMessage({
          body: "✨ 𝙷𝚎𝚛𝚎'𝚜 𝚈𝚘𝚞𝚛 𝙿𝚑𝚘𝚝𝚘 𝚆𝚒𝚝𝚑𝚘𝚞𝚝 𝙱𝚊𝚌𝚔𝚐𝚛𝚘𝚞𝚗𝚍 ✨",
          attachment: fs.createReadStream(pathie)
        }, threadID, () => fs.unlinkSync(pathie), messageID);
      } catch (error) {
        api.sendMessage(`𝙰𝚗 𝙴𝚛𝚛𝚘𝚛 𝙾𝚌𝚌𝚞𝚛𝚛𝚎𝚍 - ⚠️`, threadID, messageID);
      }
    });
  } catch (error) {
    api.sendMessage(`${error.message}`, event.threadID, event.messageID);
  }
};