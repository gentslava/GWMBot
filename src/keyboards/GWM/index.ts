import { Markup } from 'telegraf';
import createDebug from 'debug';
import { ReplyKeyboardMarkup } from '@telegraf/types';

const debug = createDebug('bot:GWM_keyboards');

const GWM = (): ReplyKeyboardMarkup => {
  debug('Вызвана "GWMKeyboard" клавиатура');

  return Markup
    .keyboard([
      ['ℹ️ Инструкция по установке'],
      ['💻 Прошивка Lite Premium v1.0.0'],
      ['💻 Прошивка Full Premium v1.1.0'],
      ['Сток прошивка 4006', 'Сток прошивка 4008'],
    ])
    .oneTime()
    .resize()
    .reply_markup
  ;
};

export default GWM;
