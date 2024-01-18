const axios = require('axios');

module.exports.config = {
  name: "tempmailv3",
  version: "1.0.0",
  hasPermission: 0,
  credits: "RICKICEL api sensui",
  usePrefix: false,
  description: "Generate temporary email or fetch inbox messages. To see inbox use tempmail inbox (generated tempmail)",
  commandCategory: "Tools",
  cooldowns: 2,
};

const TEMP_MAIL_URL = 'https://tempmail-api.codersensui.repl.co/api/gen';

module.exports.run = async ({ api, event, args }) => {
  try {
    if (args[0] === 'inbox') {
      if (!args[1]) {
        return api.sendMessage("Please Write E-mail Address For Check The Inbox - ⚠️", event.threadID);
      }
      
      const emailAddress = args[1];
      const inboxResponse = await axios.get(`https://tempmail-api.codersensui.repl.co/api/getmessage/${emailAddress}`);
      const messages = inboxResponse.data.messages;

      if (!messages || messages.length === 0) {
        return api.sendMessage(`No messages found for ${emailAddress}.`, event.threadID);
      }

      let messageText = `📨 Here's The Inbox Of This Mail 📨\n\n`;
      for (const message of messages) {
        messageText += `👤 Sender : ${message.sender}\n`;
        messageText += `✨ Subject : ${message.subject || 'No Subject - ❎'}\n`;
        messageText += `✉️ Message : ${message.message.replace(/<style([\s\S]*?)<\/style>|<script([\s\S]*?)<\/script>|<\/div>|<div>|<[^>]*>/gi, '')}\n\n`;
      }

      api.sendMessage(messageText, event.threadID);
    } else {
      const tempMailResponse = await axios.get(TEMP_MAIL_URL);
      const tempMailData = tempMailResponse.data;

      if (!tempMailData.email) {
        return api.sendMessage("Failed To Generate Temporary Email - ⚠️", event.threadID);
      }

      api.sendMessage(`📧 This Is Your Temp Mail 📧\n\n» Mail : ${tempMailData.email}`, event.threadID);
    }
  } catch (error) {
    console.error('Error', error);
    api.sendMessage("» No Messages Found In The Current Email - ⚠️", event.threadID);
  }
};