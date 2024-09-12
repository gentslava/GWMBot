import { Context } from 'telegraf';
import createDebug from 'debug';

import { author, homepage, name, version } from '../../../package.json';

const debug = createDebug('bot:about_command');

const about = (ctx: Context) => {
  const message = `*${name} ${version}*\n${author}\n${homepage}`;
  debug(`Вызвана "about" команда с сообщением \n${message}`);

  return ctx.sendMessage(message, {parse_mode: 'Markdown'});
};

export default about;
