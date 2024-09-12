import about from './about';
import greeting from './greeting';
import gwm from './gwm';
import start from './start';

export default [
  {
    command: 'start',
    description: 'старт бота',
    callback: start,
  },
  {
    command: 'greeting',
    description: '👋🏻 Команда приветствия',
    callback: greeting,
  },
  {
    command: 'gwm',
    description: '💻 Прошивки ГУ',
    callback: gwm,
  },
  {
    command: 'about',
    description: 'ℹ️ О боте',
    callback: about,
  },
];