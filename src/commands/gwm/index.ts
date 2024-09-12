import { Context } from 'telegraf';
import createDebug from 'debug';

import { GWMKeyboard } from '../../keyboards';
import { ReplyKeyboardMarkup } from '@telegraf/types';

const debug = createDebug('bot:gwm_command');

const sendMessage = async (
  ctx: Context,
  message: string,
  keyboard: ReplyKeyboardMarkup
) => ctx.sendMessage(message, {
  reply_markup: keyboard,
});

const gwm = (ctx: Context) => {
  debug(`Вызвана "gwm" команда`);

  const keyboard: ReplyKeyboardMarkup = GWMKeyboard();

  return sendMessage(ctx, 'Выберите один из вариантов 👇🏻', keyboard);
};

export default gwm;
