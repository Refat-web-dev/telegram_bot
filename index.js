const TelegramBot = require('node-telegram-bot-api');

const token = '6031609132:AAHAGpnJSMJp2YqxjhpGM1-jBuZIwX7MWZ8';

const bot = new TelegramBot(token, { polling: true });

const activeChats = new Set();

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я бот для анонимного общения. Просто отправь мне сообщение, и я перешлю его другому пользователю анонимно.');
    activeChats.add(chatId);
});

bot.onText(/\/stop/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'До свидания!');
    activeChats.delete(chatId);
});

bot.onText(/\/me/, (msg) => {
    const chatId = msg.chat.id;
    bot.getChatMember(chatId, msg.from.id).then((member) => {
        const username = member.user.username;
        const message = msg.text.slice(4);
        if (message) {
            activeChats.forEach((userChatId) => {
                bot.sendMessage(userChatId, `@${username}: ${message}`, { disable_notification: true });
            });
        } else {
            bot.sendMessage(chatId, 'Вы не ввели сообщение для отправки.');
        }
    });
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text || msg.caption;
    if (message && !message.startsWith('/start') && !message.startsWith('/stop') && !message.startsWith('/me') && !message.startsWith('@') && chatId !== 6198918137) {
        activeChats.forEach((userChatId) => {
            bot.sendMessage(userChatId, message, { disable_notification: true });
        });
        bot.sendMessage(chatId, 'Сообщение отправлено всем пользователям бота анонимно.');
    }
    console.log(msg);
});

bot.on('photo', (msg) => {
    const photoId = msg.photo[0].file_id;
    activeChats.forEach((userChatId) => {
        bot.sendPhoto(userChatId, photoId, { disable_notification: true });
    });
});

bot.on('video', (msg) => {
    const videoId = msg.video.file_id;
    activeChats.forEach((userChatId) => {
        bot.sendVideo(userChatId, videoId, { disable_notification: true });
    });
});

bot.on('voice', (msg) => {
    const voiceId = msg.voice.file_id;
    activeChats.forEach((userChatId) => {
        bot.sendVoice(userChatId, voiceId, { disable_notification: true });
    });
});

bot.on('sticker', (msg) => {
    const stickerId = msg.sticker.file_id;
    activeChats.forEach((userChatId) => {
        bot.sendSticker(userChatId, stickerId, { disable_notification: true });
    });
});

bot.on('document', (msg) => {
    const documentType = msg.document.mime_type;
    if (documentType === 'video/mp4') {
        const gifId = msg.document.file_id;
        activeChats.forEach((userChatId) => {
            bot.sendAnimation(userChatId, gifId, { disable_notification: true });
        });
    }
});
