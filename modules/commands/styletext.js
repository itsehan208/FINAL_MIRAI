module.exports.config = {
	name: "styletext",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
	description: "stylish text make using bot",
	commandCategory: "GFX",
	usages: "styletext [text]",
	cooldowns: 5
};
module.exports.run = async ({ api, event, args,}) => {
if (this.config.credits != "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗") {
        console.log("[ WARNING ] » Change credited Fuck You By 𝐀𝐒𝐈𝐅 𝐱𝟔𝟗 :p  :) "+ global.config.BOTNAME + ' credits modules "' + this.config.name + '"');
        return api.sendMessage("× [ WARNING ] × LOL CREDIT CHANGED FUCK YOUR SISTER BY 𝐀𝐒𝐈𝐅 𝐱𝟔𝟗 😹🖐🏻" , event.threadID, event.messageID);
}

const axios = global.nodemodule["axios"];
let Asif = args.join(" ");
const res = await axios.get(`https://api.samirthakuri.repl.co/api/maker/styletext?text=${Asif}&apikey=APIKEY`);
var re = res.data.result;
return api.sendMessage(`${re}`, event.threadID, event.messageID)
  }