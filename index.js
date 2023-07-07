// const TelegramBot = require('node-telegram-bot-api');

// const token = '6031609132:AAFvOl6eKG0OCDulcKcTfMg5A2nCeu1xQfY';

// const bot = new TelegramBot(token, { polling: true });

// const activeChats = new Set();

// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Привет! Я бот для анонимного общения. Просто отправь мне сообщение, и я перешлю его другому пользователю анонимно.');
//     activeChats.add(chatId);
// });

// bot.onText(/\/stop/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'До свидания!');
//     activeChats.delete(chatId);
// });

// bot.onText(/\/me/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.getChatMember(chatId, msg.from.id).then((member) => {
//         const username = member.user.username || `${member.user.first_name} ${member.user.last_name}`;
//         const message = msg.text.slice(4);
//         if (message) {
//             activeChats.forEach((userChatId) => {
//                 bot.sendMessage(userChatId, `@${username}: ${message}`, { disable_notification: true });
//             });
//         } else {
//             bot.sendMessage(chatId, 'Вы не ввели сообщение для отправки.');
//         }
//     });
// });



// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const message = msg.text || msg.caption;

//     if (message && !message.startsWith('/start') && !message.startsWith('/stop') && !message.startsWith('/me') && !message.startsWith('@') && chatId !== 6198918137) {
//         const replyTo = msg.reply_to_message;
//         let replyText = '';
//         if (replyTo) {
//             const replyUser = replyTo.from;
//             // const replyUsername = replyUser.username || `${replyUser.first_name} ${replyUser.last_name}`;
//             replyText = `Ответ на сообщение \n${replyTo.text}\n\n`;
//         }
//         bot.getChatMember(chatId, msg.from.id).then((member) => {
//             // const username = member.user.username || `${member.user.first_name} ${member.user.last_name}`;
//             const fullMessage = `${replyText} ${message}`;
//             activeChats.forEach((userChatId) => {
//                 bot.sendMessage(userChatId, fullMessage, { disable_notification: true });
//             });
//         });



      

//         // Ваш код обработки сообщения здесь



//         bot.sendMessage(chatId, 'Сообщение отправлено всем пользователям бота анонимно.');
//     }
//     console.log(msg);
// });

// bot.on('photo', (msg) => {
//     const photoId = msg.photo[0].file_id;
//     activeChats.forEach((userChatId) => {
//         bot.sendPhoto(userChatId, photoId, { disable_notification: true });
//     });
// });

// bot.on('video', (msg) => {
//     const videoId = msg.video.file_id;
//     activeChats.forEach((userChatId) => {
//         bot.sendVideo(userChatId, videoId, { disable_notification: true });
//     });
// });

// bot.on('voice', (msg) => {
//     const voiceId = msg.voice.file_id;
//     activeChats.forEach((userChatId) => {
//         bot.sendVoice(userChatId, voiceId, { disable_notification: true });
//     });
// });

// bot.on('sticker', (msg) => {
//     const stickerId = msg.sticker.file_id;
//     activeChats.forEach((userChatId) => {
//         bot.sendSticker(userChatId, stickerId, { disable_notification: true });
//     });
// });

// bot.on('document', (msg) => {
//     const documentType = msg.document.mime_type;
//     if (documentType === 'video/mp4') {
//         const gifId = msg.document.file_id;
//         activeChats.forEach((userChatId) => {
//             bot.sendAnimation(userChatId, gifId, { disable_notification: true });
//         });
//     }
// });



// const TelegramBot = require('node-telegram-bot-api');

// const token = '6031609132:AAFvOl6eKG0OCDulcKcTfMg5A2nCeu1xQfY';

// const bot = new TelegramBot(token, { polling: true });

// const activeChats = new Set();

// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Привет! Я бот для анонимного общения. Просто отправь мне сообщение, и я перешлю его другому пользователю анонимно.');
//     activeChats.add(chatId);
// });

// bot.onText(/\/stop/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'До свидания!');
//     activeChats.delete(chatId);
// });

// bot.onText(/\/me/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.getChatMember(chatId, msg.from.id).then((member) => {
//         const username = member.user.username || `${member.user.first_name} ${member.user.last_name}`;
//         const message = msg.text.slice(4);
//         if (message) {
//             activeChats.forEach((userChatId) => {
//                 bot.sendMessage(userChatId, `@${username}: ${message}`, { disable_notification: true });
//             });
//         } else {
//             bot.sendMessage(chatId, 'Вы не ввели сообщение для отправки.');
//         }
//     });
// });

// let lastMessageTime = 0;

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const message = msg.text || msg.caption;
//     const currentTime = new Date().getTime();
//     if (message && !message.startsWith('/start') && !message.startsWith('/stop') && !message.startsWith('/me') && !message.startsWith('@') && chatId !== 6198918137) {
//         const replyTo = msg.reply_to_message;
//         let replyText = '';
//         if (replyTo) {
//             const replyUser = replyTo.from;
//             // const replyUsername = replyUser.username || `${replyUser.first_name} ${replyUser.last_name}`;
//             replyText = `Ответ на сообщение \n${replyTo.text}\n\n`;
//         }
//         bot.getChatMember(chatId, msg.from.id).then((member) => {
//             // const username = member.user.username || `${member.user.first_name} ${member.user.last_name}`;
//             const fullMessage = `${replyText} ${message}`;
//             activeChats.forEach((userChatId) => {
//                 bot.sendMessage(userChatId, fullMessage, { disable_notification: true });
//             });
//         });
//         if (currentTime - lastMessageTime < 5000) {
//             bot.sendMessage(chatId, 'Подождите несколько секунд перед отправкой следующего сообщения.');
//             return;
//         }

//         // Ваш код обработки сообщения здесь

//         lastMessageTime = currentTime;

//         bot.sendMessage(chatId, 'Сообщение отправлено всем пользователям бота анонимно.');
//     }
//     console.log(msg);
// });

// bot.on('photo', (msg) => {
//     const photoId = msg.photo[0].file_id;
//     activeChats.forEach((userChatId) => {
//         bot.sendPhoto(userChatId, photoId, { disable_notification: true });
//     });
// });

// bot.on('video', (msg) => {
//     const videoId = msg.video.file_id;
//     activeChats.forEach((userChatId) => {
//         bot.sendVideo(userChatId, videoId, { disable_notification: true });
//     });
// });

// bot.on('voice', (msg) => {
//     const voiceId = msg.voice.file_id;
//     activeChats.forEach((userChatId) => {
//         bot.sendVoice(userChatId, voiceId, { disable_notification: true });
//     });
// });

// bot.on('sticker', (msg) => {
//     const stickerId = msg.sticker.file_id;
//     activeChats.forEach((userChatId) => {
//         bot.sendSticker(userChatId, stickerId, { disable_notification: true });
//     });
// });

// bot.on('document', (msg) => {
//     const documentType = msg.document.mime_type;
//     if (documentType === 'video/mp4') {
//         const gifId = msg.document.file_id;
//         activeChats.forEach((userChatId) => {
//             bot.sendAnimation(userChatId, gifId, { disable_notification: true });
//         });
//     }
// });



const TelegramBot = require('node-telegram-bot-api');

const token = '6335857018:AAF8DcwkVgcczSwbAVaNgWxanaPMZffcY3I';

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
// const TelegramBot = require('node-telegram-bot-api');

// // Токен бота, который можно получить у BotFather
// const token = '6031609132:AAFvOl6eKG0OCDulcKcTfMg5A2nCeu1xQfY';

// // Создаем экземпляр бота
// const bot = new TelegramBot(token, { polling: true });

// // Список активных чатов бота
// const activeChats = new Set();

// // Обработчик команды /start
// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Привет! Я бот для анонимного общения. Просто отправь мне сообщение, и я перешлю его другому пользователю анонимно.');
//     // Добавляем чат в список активных чатов
//     activeChats.add(chatId);
// });

// // Обработчик команды /stop
// bot.onText(/\/stop/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'До свидания!');
//     // Удаляем чат из списка активных чатов
//     activeChats.delete(chatId);
// });

// bot.onText(/\/me/, (msg) => {
//     const chatId = msg.chat.id;
//     activeChats.forEach((userChatId) => {
//         bot.getChatMember(chatId, msg.from.id).then((member) => {
//             const username = member.user.username;
//             bot.sendMessage(userChatId, `@${username}: ${msg.text.slice(4)}`);
//         });
//         // Отправляем сообщение другому пользователю анонимно
//     });
// });
// // Обработчик всех сообщений
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const message = msg.text || msg.caption; // проверяем наличие свойства text или caption
//     console.log(msg);
//     // Если сообщение не является командой /start или /stop, отправляем его каждому пользователю бота
//     if (message && !message.startsWith('/start') && !message.startsWith('/stop') && !message.startsWith('/me') && chatId !== 6198918137) {
//         activeChats.forEach((userChatId) => {
//             // Отправляем сообщение другому пользователю анонимно
//             bot.sendMessage(userChatId, message, { disable_notification: true });
//         });

//         // Отправляем подтверждение отправки сообщения
//         bot.sendMessage(chatId, 'Сообщение отправлено всем пользователям бота анонимно.');
//     }
// });

// bot.on('photo', (msg) => {
//     // const chatId = msg.chat.id;
//     const photoId = msg.photo[0].file_id;
//     activeChats.forEach((userChatId) => {
//         // Отправляем сообщение другому пользователю анонимно
//         bot.sendPhoto(userChatId, photoId, { disable_notification: true });
//     });

// });

// bot.on('video', (msg) => {
//     const chatId = msg.chat.id;
//     const videoId = msg.video.file_id;
//     activeChats.forEach((userChatId) => {
//         // Отправляем сообщение другому пользователю анонимно
//         bot.sendVideo(userChatId, videoId, { disable_notification: true });
//     });
// });

// bot.on('voice', (msg) => {
//     const chatId = msg.chat.id;
//     const voiceId = msg.voice.file_id;
//     activeChats.forEach((userChatId) => {
//         // Отправляем сообщение другому пользователю анонимно
//         bot.sendVoice(userChatId, voiceId, { disable_notification: true });
//     });
// });

// bot.on('sticker', (msg) => {
//     const chatId = msg.chat.id;
//     const stickerId = msg.sticker.file_id;
//     activeChats.forEach((userChatId) => {
//         // Отправляем сообщение другому пользователю анонимно
//         bot.sendSticker(userChatId, stickerId, { disable_notification: true });
//     });
// });

// bot.on('document', (msg) => {
//     const chatId = msg.chat.id;
//     const documentType = msg.document.mime_type;
//     activeChats.forEach((userChatId) => {
//         if (documentType === 'video/mp4') {
//             const gifId = msg.document.file_id;
//             // Отправляем сообщение другому пользователю анонимно
//             bot.sendAnimation(userChatId, gifId, { disable_notification: true });
//         }
//     });
// });


// bot.on('gif', (msg) => {
    //     const chatId = msg.chat.id;
//     const gifId = msg.document.file_id;
//     activeChats.forEach((userChatId) => {
//         // Отправляем сообщение другому пользователю анонимно
//         bot.sendDocument(userChatId, gifId, { disable_notification: true });
//     });
//   });
// const TelegramBot = require('node-telegram-bot-api');

// // Токен бота, который можно получить у BotFather
// const token = '6031609132:AAFvOl6eKG0OCDulcKcTfMg5A2nCeu1xQfY';

// // Создаем экземпляр бота
// const bot = new TelegramBot(token, { polling: true });

// // Список активных чатов бота
// const activeChats = new Set();

// // Обработчик команды /start
// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Привет! Я бот для анонимного общения. Просто отправь мне сообщение, и я перешлю его другому пользователю анонимно.');
//     // Добавляем чат в список активных чатов
//     activeChats.add(chatId);
// });

// // Обработчик команды /stop
// bot.onText(/\/stop/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'До свидания!');
//     // Удаляем чат из списка активных чатов
//     activeChats.delete(chatId);
// });

// // Обработчик всех сообщений
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const message = msg;

//     // Если сообщение не является командой /start или /stop, отправляем его каждому пользователю бота
//     if (!message.text.startsWith('/start') && !message.text.startsWith('/stop')) {
//         activeChats.forEach((userChatId) => {
//             // Отправляем сообщение другому пользователю анонимно
//             bot.forwardMessage(userChatId, chatId, message.message_id, { disable_notification: true });
//         });

//         // Отправляем подтверждение отправки сообщения
//         bot.sendMessage(chatId, 'Сообщение отправлено всем пользователям бота анонимно.');
//     }
// });
// bot.on('polling_error', (error) => {
//     console.log(error);  // выводим ошибку в консоль
// });
// const TelegramBot = require('node-telegram-bot-api');

// // Токен бота, который можно получить у BotFather
// const token = '6031609132:AAFvOl6eKG0OCDulcKcTfMg5A2nCeu1xQfY';

// // Создаем экземпляр бота
// const bot = new TelegramBot(token, { polling: true });

// // Список активных чатов бота
// const activeChats = new Set();

// // Обработчик команды /start
// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Привет! Я бот для анонимного общения. Просто отправь мне сообщение, и я перешлю его другому пользователю анонимно.');
//     // Добавляем чат в список активных чатов
//     activeChats.add(chatId);
// });

// // Обработчик команды /stop
// bot.onText(/\/stop/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'До свидания!');
//     // Удаляем чат из списка активных чатов
//     activeChats.delete(chatId);
// });

// // Обработчик всех сообщений
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const message = msg;

//     // Если сообщение не является командой /start или /stop, отправляем его каждому пользователю бота
//     if (!message.text.startsWith('/start') && !message.text.startsWith('/stop')) {
//         activeChats.forEach((userChatId) => {
//             // Отправляем сообщение другому пользователю анонимно
//             bot.forwardMessage(userChatId, chatId, message.message_id);
//         });

//         // Отправляем подтверждение отправки сообщения
//         bot.sendMessage(chatId, 'Сообщение отправлено всем пользователям бота анонимно.');
//     }
// });
// const TelegramBot = require('node-telegram-bot-api');

// // Токен бота, который можно получить у BotFather
// const token = '6031609132:AAFvOl6eKG0OCDulcKcTfMg5A2nCeu1xQfY';

// // Создаем экземпляр бота
// const bot = new TelegramBot(token, { polling: true });

// // Список активных чатов бота
// const activeChats = new Set();

// // Обработчик команды /start
// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Привет! Я бот для анонимного общения. Просто отправь мне сообщение, и я перешлю его другому пользователю анонимно.');
//     // Добавляем чат в список активных чатов
//     activeChats.add(chatId);
// });

// // Обработчик команды /stop
// bot.onText(/\/stop/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'До свидания!');
//     // Удаляем чат из списка активных чатов
//     activeChats.delete(chatId);
// });

// // Обработчик всех сообщений
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const message = msg;

//     // Если сообщение не является командой /start или /stop, отправляем его каждому пользователю бота
//     if (!message.text.startsWith('/start') && !message.text.startsWith('/stop')) {
//         activeChats.forEach((userChatId) => {
//             // Отправляем сообщение другому пользователю анонимно
//             bot.sendCopy(userChatId, message, { disable_notification: true });
//         });

//         // Отправляем подтверждение отправки сообщения
//         bot.sendMessage(chatId, 'Сообщение отправлено всем пользователям бота анонимно.');
//     }
//     bot.on('polling_error', (error) => {
//         console.log(error);  // выводим ошибку в консоль
//     });
// });
// const TelegramBot = require('node-telegram-bot-api');

// // Токен бота, который можно получить у BotFather
// const token = '6031609132:AAFvOl6eKG0OCDulcKcTfMg5A2nCeu1xQfY';

// // Создаем экземпляр бота
// const bot = new TelegramBot(token, { polling: true });

// // Список активных чатов бота
// const activeChats = new Set();

// // Обработчик команды /start
// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Привет! Я бот для анонимного общения. Просто отправь мне сообщение, и я перешлю его другому пользователю анонимно.');
//     // Добавляем чат в список активных чатов
//     activeChats.add(chatId);
// });

// // Обработчик команды /stop
// bot.onText(/\/stop/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'До свидания!');
//     // Удаляем чат из списка активных чатов
//     activeChats.delete(chatId);
// });

// // Обработчик всех сообщений
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const message = msg.text;

//     // Если сообщение не является командой /start или /stop, отправляем его каждому пользователю бота
//     if (!message.startsWith('/start') && !message.startsWith('/stop')) {
//         activeChats.forEach((userChatId) => {
//             // Отправляем сообщение другому пользователю анонимно
//             bot.sendMessage(userChatId, message, { disable_notification: true });
//         });

//         // Отправляем подтверждение отправки сообщения
//         bot.sendMessage(chatId, 'Сообщение отправлено всем пользователям бота анонимно.');
//     }
// });
// const TelegramBot = require('node-telegram-bot-api');

// // Токен бота, который можно получить у BotFather
// const token = '6031609132:AAFvOl6eKG0OCDulcKcTfMg5A2nCeu1xQfY';

// // Создаем экземпляр бота
// const bot = new TelegramBot(token, { polling: true });

// // Список активных чатов бота
// const activeChats = new Set();

// // Обработчик команды /start
// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Привет! Я бот для анонимного общения. Просто отправь мне сообщение, и я перешлю его другому пользователю анонимно.');
//     // Добавляем чат в список активных чатов
//     activeChats.add(chatId);
// });

// // Обработчик команды /stop
// bot.onText(/\/stop/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'До свидания!');
//     // Удаляем чат из списка активных чатов
//     activeChats.delete(chatId);
// });

// // Обработчик всех сообщений
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const message = msg.text;

//     // Отправляем сообщение каждому пользователю бота
//     activeChats.forEach((userChatId) => {
//         // Отправляем сообщение другому пользователю анонимно
//         bot.sendMessage(userChatId, message, { disable_notification: true });
//     });

//     // Отправляем подтверждение отправки сообщения
//     bot.sendMessage(chatId, 'Сообщение отправлено всем пользователям бота анонимно.');
// });
// const TelegramBot = require('node-telegram-bot-api');

// // Токен бота, который можно получить у BotFather
// const token = '6031609132:AAFvOl6eKG0OCDulcKcTfMg5A2nCeu1xQfY';

// // Создаем экземпляр бота
// const bot = new TelegramBot(token, { polling: true });

// // Обработчик команды /start
// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Привет! Я бот для анонимного общения. Просто отправь мне сообщение, и я перешлю его другому пользователю анонимно.');
// });

// // Обработчик всех сообщений
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const message = msg.text;
//     console.log(msg);
//     // Получаем список всех обновлений
//     bot.getUpdates().then((updates) => {
//         // Отправляем сообщение каждому пользователю бота
//         updates.forEach((update) => {
//             const userChatId = update.message.chat.id;
//             // Отправляем сообщение другому пользователю анонимно
//             bot.sendMessage(userChatId, message, { disable_notification: true });
//         });
//     });

//     // Отправляем подтверждение отправки сообщения
//     bot.sendMessage(chatId, 'Сообщение отправлено всем пользователям бота анонимно.');
// });


// const { log } = require('console');
// const TelegramBot = require('node-telegram-bot-api');

// // Токен бота, который можно получить у BotFather
// const token = '6031609132:AAFvOl6eKG0OCDulcKcTfMg5A2nCeu1xQfY';

// // Создаем экземпляр бота
// const bot = new TelegramBot(token, { polling: true });

// // Обработчик команды /start
// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, 'Привет! Я бот для анонимного общения. Просто отправь мне сообщение, и я перешлю его другому пользователю анонимно.');
// });

// // Обработчик всех сообщений
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const message = msg.text;

//     // Отправляем сообщение другому пользователю анонимно
//     bot.sendMessage(366194347, message, { disable_notification: true });

//     // Отправляем подтверждение отправки сообщения
//     bot.sendMessage(chatId, 'Сообщение отправлено анонимно.');
// });
// // const telegramApi = require('node-telegram-bot-api')
// const TelegramBot = require('node-telegram-bot-api');

// const token = '6031609132:AAFvOl6eKG0OCDulcKcTfMg5A2nCeu1xQfY'

// const bot = new TelegramBot(token, { polling: true });


// bot.onText(/\/start/, (msg) => {
//     bot.sendMessage(msg.chat.id, 'Добро пожаловать в анонимный чат!');
// });

// bot.on('message', (msg) => {
//     // Если сообщение не команда, то отправляем его всем пользователям бота
//     if (!msg.text.startsWith('/')) {
//         bot.sendMessage(msg.chat.id, `Анонимное сообщение: ${msg.text}`);
//     }
// });
// bot.on('message', msg => {
//     console.log(msg);
// })
// const bot = new telegramApi(token, { polling: true })


// Токен вашего бота

// Создаем экземпляр бота

// Обработчик команды /start

// Обработчик сообщений
