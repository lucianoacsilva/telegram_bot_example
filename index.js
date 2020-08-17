const TelegramBot = require('node-telegram-bot-api'); 
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {

  bot.sendMessage(msg.chat.id, "Seja bem vindo!!");
    
});

bot.onText(/\/sendpic/, (msg) => {

  bot.sendPhoto(msg.chat.id,"imagemExemplo.jpg");
    
});


// Send pictures
bot.onText(/\/sendpic/, (msg) => {

  bot.sendPhoto(msg.chat.id,"imagemExemplo.jpg",{caption : "Olha só!!!! \nPCzim!!!"} );
    
});


// /start command
bot.onText(/\/start/, (msg) => {
    
  bot.sendMessage(msg.chat.id, "Seja bem vindo!!", {
  "reply_markup": {
      "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
      }
  });
    
});
    
bot.on('message', (msg) => {

  // Location
  var location = "location";

  if (msg.text.includes(location)) {
      bot.sendLocation(msg.chat.id,44.97108, -104.27719);
      bot.sendMessage(msg.chat.id, "Here is the point");

  }

  // Hi
  var hi = "hi";
  if (msg.text.toString().toLowerCase().includes(hi)) {
    bot.sendMessage(msg.chat.id,"Olá, " + msg.from.first_name + "!!");
  } 

  // Good Bye
  var bye = "bye";
  if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Até mais!! Tchauu!!!");
  }
     
});