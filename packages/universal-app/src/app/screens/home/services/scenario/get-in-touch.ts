import { Sender, ContentType } from './../../types/enums';
import { History } from '../../types/History';

export const getInTouch: History[] = [
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `Feel free to contact me`,
    timeout: 500,
    startTimeout: 0,
    autoNext: true,
  },
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
  <b>Email:</b> <br />
  mikhail.tsai@gmail.com <br />
  <br />
  <b>Skype:</b> <br />
  live:goldreich_2 <br />
  <br />
  <b>Upwork:</b> <br />
  <a href="https://www.upwork.com/fl/mikhailtsai" target="_blank">
    upwork.com/fl/mikhailtsai
  </a>✔️ <br />
  <br />
  <b>Github:</b> <br />
  <a href="https://github.com/mikhailtsai" target="_blank">
    github.com/mikhailtsai
  </a> <br />
`,
    timeout: 1000,
    startTimeout: 0,
    autoNext: true,
  },
  {
    sender: Sender.User,
    contentType: ContentType.Commands,
  },
];
