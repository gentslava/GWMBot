import { Context } from 'telegraf';
import createDebug from 'debug';
import { resetKeyboards } from '../../keyboards';

const debug = createDebug('bot:start_command');

const start = (ctx: Context) => {
  debug(`Вызвана "start" команда`);

  return resetKeyboards(ctx);
};

export default start;
