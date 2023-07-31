const TelegramBot = require('node-telegram-bot-api');

// replace 'YOUR_TELEGRAM_BOT_TOKEN' with your bot's token
const bot = new TelegramBot('6214822267:AAEJpdSIQ2xu60eW2sB2fRt7miV--Vd_95s', {polling: true});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет, Друг!');
});