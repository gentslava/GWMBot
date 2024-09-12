import { Context, Markup } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:reset_keyboards');

const reset = async (ctx: Context) => {
  debug('Вызвана "reset" клавиатура');

  await ctx.setChatMenuButton({
		type: "commands",
	});

  await ctx.sendMessage(
		"Привет! Для продолжения введи команду",
		Markup
      .removeKeyboard(),
	);
};

export default reset;
