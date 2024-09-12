import { Context } from 'telegraf';
import createDebug from 'debug';
import { User } from '@telegraf/types';

const debug = createDebug('bot:greeting_textas');

const replyToMessage = (ctx: Context, string: string) => ctx.reply(string);

const greeting = (ctx: Context) => {
  debug('Вызвана "greeting" текстовая команда');

  const { message } = ctx;
  debug(message);
  if (!message) return;

  const user: User | undefined = message.from;
  let userName: string = 'Аноним';
  if (user?.first_name) userName = user.first_name;
  if (user?.last_name) userName = `${userName} ${user.last_name}`;

  replyToMessage(ctx, `Привет, ${userName}!`);
};

export default greeting;
