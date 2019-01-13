import { Sender, ContentType } from './../../types/enums';
import { History } from '../../types/History';

export const favoriteTechnologyStack: History[] = [
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
  <b>Favorite technology stack:</b>
`,
    timeout: 500,
    startTimeout: 0,
    autoNext: true,
  },
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
  <b>language:</b> javascript / ✔️typescript  <br />
  <b>frontend:</b> ✔️angular, react</b> <br />
  <b>backend:</b> Node.js, frameworks ✔️NestJs or Express <br />
  <b>API architecture:</b> ✔️GraphQL, REST <br />
`,
    timeout: 1000,
    startTimeout: 0,
    autoNext: true,
  },
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
  <b>Web server:</b> <br />
  <b>nginx</b> - in most cases, for static files, proxying, load balancing<br />
  <b>Node.js only</b> - for websockets it's not ok to use some proxying tools,
  such as nginx, so in these cases I prefer to use Node.js directly<br />
`,
    timeout: 1000,
    startTimeout: 0,
    autoNext: true,
  },
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
  <b>DevOps:</b> GitLab CI, Docker <br />
  <b>Cloud systems:</b> Amazon Web Services <br />
  <br />
  <b>OS:</b> Linux as a server, Windows as a working system, MacOS as a safari-testing-system and iOS compiler
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
