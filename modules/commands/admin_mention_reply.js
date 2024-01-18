module.exports.config = {
  name: "auto_reply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "BOT Send Reply If Admin Mentioned",
  commandCategory: "Extra - Files",
  usePrefix: "False - ❎",
  usages: "Mention Admin",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100095251515413","100083900196039") {
    var aid = ["100083900196039","100095251515413"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["বস সিংগেল পোলা তাকে একটা Gf দেও 🥹","আমার Boss রে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু 😡","বস রে আর একবার মেনশন দিলে খবর আছে তোমার 😤","তোমাকে কিন্তু লাথি মারমু Boss রে  মেনশন দিবা না 😠","বস এখন অনেক বিজি তাকে মেনশন দিয়ে ডিস্টার্ব কইরো না 😐😏"," বস এখন অনেক বিজি তাকে মেনশন দিবা না 😡"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }