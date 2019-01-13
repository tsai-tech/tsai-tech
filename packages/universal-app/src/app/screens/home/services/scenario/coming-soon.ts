import { Sender, ContentType } from './../../types/enums';
import { History } from '../../types/History';

export const comingSoon: History[] = [
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
      I plan to add more information about my experience,
      with app-examples demonstrating my skills, such as:
`,
    timeout: 500,
    autoNext: true,
  },
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
      - html5 semantic, accessability, css3 features <br />
      - canvas, webgl, data-visualization <br />
      - microservice scalable architecture with: caching, load balancing, message broker and different databases <br />
      - Linux and AWS Management <br />
      - More info for technical customers: programming patterns and code gists <br />
      - Video with introducing myself
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
      Please feel free to contact me
`,
    timeout: 1000,
    autoNext: true,
  },
  {
    sender: Sender.User,
    contentType: ContentType.Commands,
  },
];
