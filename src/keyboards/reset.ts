import { Context, Markup } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:reset_keyboards');

const reset = async (ctx: Context) => {
  debug('Вызвана "reset" клавиатура');

  ctx.setChatMenuButton({
		type: "commands",
	});

  ctx.sendMessage(
		"Привет! Для продолжения введи команду",
		Markup
      .removeKeyboard(),
	);
};

export default reset;
