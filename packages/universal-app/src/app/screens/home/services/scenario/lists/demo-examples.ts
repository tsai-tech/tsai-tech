import { Sender, ContentType } from './../../../types/enums';
import { History } from '../../../types/History';

export const demoExamples: History[] = [
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
      Demo examples
`,
    timeout: 500,
    autoNext: true,
    isParent: true,
  },
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
    This website is already a nice example of an Angular application 🤗<br />
    Honestly, I plan to make it better soon, but you already can see:
`,
    timeout: 1000,
    autoNext: true,
  },
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
    <b>Fluent Button Components</b> - these chat command buttons are Angular's implementation of Microsoft Fluent Design concept effect
    <a href="https://docs.microsoft.com/en-us/windows/uwp/design/style/reveal" target="_blank">
      Reveal Highlight
    </a> <br />
    <br />
    ✔️ I highly recommend watching this component from a PC, not from a mobile device,
    in order to appreciate all features of my implementation
`,
    timeout: 1000,
    autoNext: true,
  },
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
    <b>Acrylic material backgrounds</b> - the backgrounds of this application are also Angular's implementation of
    Microsoft Fluent Design concept component
    <a href="https://docs.microsoft.com/en-us/windows/uwp/design/style/acrylic" target="_blank">
      Acrylic material
    </a>
`,
    timeout: 1000,
    autoNext: true,
  },
  {
    sender: Sender.Bot,
    contentType: ContentType.HTML,
    content: `
    I plan to add all my implementations of Fluent Design System in one of my own OpenSource Angular UI library soon 👽
`,
    timeout: 1000,
    autoNext: true,
  },
  {
    sender: Sender.User,
    contentType: ContentType.Commands,
  },
];
