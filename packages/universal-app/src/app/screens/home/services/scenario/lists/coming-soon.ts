import { Sender, ContentType } from './../../../types/enums';
import { History } from '../../../types/History';

export const comingSoon: History[] = [
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
      I plan to add more information about my experience with examples demonstrating my skills such as:
`,
    timeout: 500,
    autoNext: true,
    isParent: true,
  },
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
      <ul>
        <li>html5 semantic, accessability, css3 features</li>
        <li>canvas, webgl, data-visualization</li>
        <li>microservice scalable architecture with: caching, load balancing, message broker and different databases</li>
        <li>Linux and AWS Management</li>
      </ul>
`,
    timeout: 1000,
    autoNext: true,
  },
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
      I just created this website, so I'm sorry for incomplete information <br />
      <br />
      Please feel free to contact me 🙂
`,
    timeout: 1000,
    autoNext: true,
  },
  {
    sender: Sender.User,
    contentType: ContentType.Commands,
  },
];
