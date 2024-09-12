import { Context } from 'telegraf';
import createDebug from 'debug';

import { author, homepage, name, version } from '../../../package.json';
import { ParseMode } from '@telegraf/types';

const debug = createDebug('bot:about_command');

const sendMessage = async (
  ctx: Context,
  message: string,
  parse_mode: ParseMode,
) => ctx.sendMessage(message, { parse_mode });

const about = (ctx: Context) => {
  const message = `*${name} ${version}*\n${author}\n${homepage}`;
  debug(`Вызвана "about" команда с сообщением \n${message}`);

  return sendMessage(ctx, message, 'Markdown');
};

export default about;
