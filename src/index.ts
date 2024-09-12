import { Telegraf } from 'telegraf';
import { useNewReplies } from "telegraf/future";
import { message } from 'telegraf/filters';
import createDebug from 'debug';

import { about } from './commands';
import { greeting } from './text';
import { GWMKeyboard, resetKeyboards } from './keyboards';

const debug = createDebug('bot');

const ENVIRONMENT = process.env.NODE_ENV || '';
const BOT_TOKEN = process.env.BOT_TOKEN || '';
const USERNAME = process.env.USERNAME || '';
const PORT = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000;
const WEBHOOK_URL = `${process.env.WEBHOOK_URL}/bot${BOT_TOKEN}`;

const bot = new Telegraf(BOT_TOKEN);
bot.use(useNewReplies());

bot.command('start', resetKeyboards);

bot.telegram.setMyCommands([
  {
    command: 'greeting',
    description: '👋🏻 Команда приветствия'
  },
  {
    command: 'gwm',
    description: '💻 Прошивки ГУ'
  },
  {
    command: 'about',
    description: 'ℹ️ О боте'
  },
]);

bot.command('about', about);
bot.command('greeting', greeting);
bot.command('gwm', GWMKeyboard);
bot.on(message('text'), greeting);

const production = () => {
  debug('Bot runs in production mode');
  // debug(`${USERNAME} setting webhook: ${WEBHOOK_URL}`);
  // bot.telegram.setWebhook(WEBHOOK_URL);
  // debug(`${USERNAME} starting webhook on port: ${PORT}`);
  // bot.telegram.startWebhook(`/bot${BOT_TOKEN}`, null, PORT);
};

const development = () => {
  debug('Bot runs in development mode');
  // debug(`${USERNAME} deleting webhook`);
  // bot.telegram.deleteWebhook();
  debug(`${USERNAME} starting polling`);
  bot.launch();
};

ENVIRONMENT === 'production' ? production() : development();
