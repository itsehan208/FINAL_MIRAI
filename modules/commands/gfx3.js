module.exports.config = {
    name: "dfg",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "Gfx logo make using bot",
  commandCategory: "GFX",
  usages: "gfx3	[text1 + text2]",
  cooldowns: 5
};
module.exports.run = async ({ api, event,args }) => {  {
  if (this.config.credits != "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗") {
  console.log("[ WARNING ] » Change credited Fuck You By 𝐀𝐒𝐈𝐅 𝐱𝟔𝟗 :p  :) "+ global.config.BOTNAME + ' credits modules "' + this.config.name + '"');
  return api.sendMessage("× [ WARNING ] × LOL CREDIT CHANGED FUCK YOUR SISTER BY 𝐀𝐒𝐈𝐅 𝐱𝟔𝟗 😹🖐🏻" , event.threadID, event.messageID);
    const fs = require("fs-extra");
    const request = require("request");
   const { threadID, messageID, senderID, body } = event; 
try {
const content = args.join(" ").split("|").map(item => item = item.trim());
let text1 = content[0]
let text2 = content [1]
if (!args[0])
    return api.sendMessage("Wrong format!\nUse "+global.config.PREFIX+this.config.name+" "+this.config.usages, event.threadID, event.messageID);

   var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
   return request(encodeURI(`https://api.samirthakuri.repl.co/api/gfx3?text=${text1}&text2=${text2}`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback()); 
} catch (err){
return api.sendMessage("Api Error", event.threadID, event.messageID)
}   
}} //FIXED BY 𝐀𝐒𝐈𝐅 𝐱𝟔𝟗