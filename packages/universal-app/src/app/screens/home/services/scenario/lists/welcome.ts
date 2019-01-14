import { Sender, ContentType } from './../../../types/enums';
import { History } from '../../../types/History';

export const welcome: History[] = [
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `Hello there! ✌`,
    timeout: 1000,
    startTimeout: 0,
    autoNext: true,
    isParent: true,
  },
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
      My name is Mikhail and I'm a full stack web developer 👨‍💻 <br />
      I'm currently available for work ✔️
    `,
    timeout: 1500,
    startTimeout: 0,
    autoNext: true,
  },
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `Feel free to ask me any questions`,
    timeout: 1510,
    startTimeout: 500,
    autoNext: true,
  },
  {
    sender: Sender.User,
    contentType: ContentType.Commands,
  },
];
