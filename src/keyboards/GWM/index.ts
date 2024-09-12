import { Context, Markup } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:GWM_keyboards');

const GWM = async (ctx: Context) => {
  debug('Вызвана "GWMKeyboard" клавиатура');

  const { message } = ctx;
  if (!message) return;

  const keyboard = Markup
    .keyboard([
      ['ℹ️ Инструкция по установке'],
      ['💻 Прошивка Lite Premium v1.0.0'],
      ['💻 Прошивка Full Premium v1.1.0'],
      ['Сток прошивка 4006', 'Сток прошивка 4008'],
    ])
    .oneTime()
    .resize()
  ;

  ctx.sendMessage(
		"Выберите один из вариантов 👇🏻",
		keyboard,
	);
};

export default GWM;
