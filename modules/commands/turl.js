module.exports.config = {
  name: "tinyurl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "shortlink",
  usages: "[url]",
  commandCategory: "Tool",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let Asif = args.join(" ");
const res = await axios.get(`https://apipremium-thanhali.thanhali.repl.co/tinyurl/create?apikey=ThanhAliVip_1234567890&url=${Asif}`);
var plaintext = res.data.url;
return api.sendMessage(`${plaintext}`, event.threadID, event.messageID)
}