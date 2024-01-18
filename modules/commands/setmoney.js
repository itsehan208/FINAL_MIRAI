module.exports.config = {
name: "money",
version: "1.0.0",
hasPermssion: 2,
credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
description: "Adjust user information",
commandCategory: "Owner",
usages: "[add/set/clean] [Amount] [User Tag]",
cooldowns: 5
};

module.exports.run = async function ({ event, api, Currencies, args, permssion }) {
  const permission = global.config.GOD;
  if (!permission.includes(event.senderID)) return api.sendMessage(`⚠️You don't have permission to use this command!`, event.threadID, event.messageID);
   if (permssion != 2) return api.sendMessage( `[DONATE] ➜ Momo/Mbbank: 0396049649. Thank you!! ❤️`, event.threadID, event.messageID)
     const { threadID, messageID, senderID } = event;
     const { throwError } = global.utils;
     const mentionID = Object.keys(event.mentions);
     const money = parseInt(args[1]);

     var message = [];
     var error = [];

     switch (args[0]) {
         case "add": {
             if (mentionID.length != 0) {
                 for (singleID of mentionID) {
                     if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
                     try {
                         await Currencies.increaseMoney(singleID, money);
                         message.push(singleID);
                     } catch (e) { error.push(e); console.log(e) };
                 }
                 return api.sendMessage(`[Money]➜ Added ${money}$ to ${message.length} person`, threadID, function () { if (error.length != 0) return api.sendMessage(`[ Error]➜ Unable to add money to ${error.length} person!`, threadID) }, messageID);
             } else {
                 if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
                 try {
                     await Currencies.increaseMoney(senderID, money);
                     message.push(senderID);
                 } catch (e) { error.push(e) };
                 return api.sendMessage(`[Money]➜ Added ${money}$ to self`, threadID, function () { if (error.length != 0) return api.sendMessage(`[Error]➜ Unable can add more money to yourself!`, threadID) }, messageID);
             }
         }

         case "set": {
             if (mentionID.length != 0) {
                 for (singleID of mentionID) {
                     if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
                     try {
                         await Currencies.setData(singleID, { money });
                         message.push(singleID);
                     } catch (e) { error.push(e) };
                 }
                 return api.sendMessage(`[Money]➜ Successfully set ${money}$ for ${message.length} person`, threadID, function () { if (error.length != 0) return api.sendMessage(` [Error]➜ Unable to set money for ${error.length} person!`, threadID) }, messageID);
             } else {
                 if (!money || isNaN(money)) return throwError(this.config.name, threadID, messageID);
                 try {
                     await Currencies.setData(senderID, { money });
                     message.push(senderID);
                 } catch (e) { error.push(e) };
                 return api.sendMessage(`[Money]➜ Successfully set ${money}$ for self`, threadID, function () { if (error.length != 0) return api.sendMessage(`[Error] Unable set money for yourself!`, threadID) }, messageID);
             }
         }

         case "clean": {
             if (mentionID.length != 0) {
                 for (singleID of mentionID) {
                     try {
                         await Currencies.setData(singleID, { money: 0 });
                         message.push(singleID);
                     } catch (e) { error.push(e) };
                 }
                 return api.sendMessage(`[Money]➜ Successfully deleted all money of ${message.length} person`, threadID, function () { if (error.length != 0) return api.sendMessage(`[Error ]➜ Unable to delete all funds of ${error.length} person!`, threadID) }, messageID);
             } else {
                 try {
                     await Currencies.setData(senderID, { money: 0 });
                     message.push(senderID);
                 } catch (e) { error.push(e) };
                 return api.sendMessage(`[Money]➜ Successfully deleted money for myself`, threadID, function () { if (error.length != 0) return api.sendMessage(`[Error] Cannot delete all own money!`, threadID) }, messageID);
             }
         }

         default: {
             return global.utils.throwError(this.config.name, threadID, messageID);
         }
     }
}