import { History } from './../types/History';
import { Sender, Type } from '../types/enums';

export interface Scenario extends History {
  timeout: number;
}

export const scenario: Scenario[] = [
  {
    id: 1,
    sender: Sender.Bot,
    type: Type.Alone,
    welcome: true,
    date: new Date(),
    content: 'Hello there! \n How are you?',
    timeout: 500
  }
];

const keys = {
  welcome: 1
};

export function getScenario(key: string): Scenario {
  if (keys[key]) {
    return scenario.filter(item => item.id === keys[key]).reduce(a => a);
  } else {
    throw new Error(`Unable to find scenario by key: '${key}'`);
  }
}
