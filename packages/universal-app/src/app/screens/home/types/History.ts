import { Sender, Type } from './enums';

export interface History {
  id: number;
  welcome: boolean;
  sender: Sender;
  type: Type;
  date: Date;
  content: any;
}
