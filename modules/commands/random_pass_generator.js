const axios = require('axios');

module.exports.config = {
  name: "randompass",// /fb passgen
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ber",//credit sa owner ng api
  usePrefix: true,
  description: "random pass",
  commandCategory: "Tools",
  usages: "/randompass gen",
  cooldowns: 2,
};
module.exports.run = async ({ api, event, args }) => {
    let { threadID, messageID } = event;
    let gen1= args[0];
  if(!gen1) {
api.sendMessage(`⚠️ - MISSING INPUT - ⚠️\n\n💠 USAGE : ${global.config.PREFIX}randompass gen`, threadID, messageID);
return;
  }
api.sendMessage("Random Pass Are Generating 🕜", threadID, messageID);

    try {
        const pass = await axios.get(`https://sensui-useless-apis.codersensui.repl.co/api/tools/${encodeURI(gen1)}`);
        const gen = pass.data.password;

      api.sendMessage(`🥊 HERE'S GENERATED PASSWORD 🔑\n\n🍁 Password : ${gen}`, threadID, messageID);

    } catch (pass) {
        return api.sendMessage(`error ${pass}`, threadID, messageID);
    };

};