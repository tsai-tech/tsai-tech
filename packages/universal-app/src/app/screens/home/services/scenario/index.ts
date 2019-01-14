import { Commands } from './../../types/enums';
import { History } from './../../types/History';
import { generateIds } from './generate-ids';
import {
  welcome,
  getInTouch,
  comingSoon,
  favoriteTechnologyStack,
  demoExamples
} from './lists';


export const textsOfCommands: { [key in keyof typeof Commands]?: string } = {
  FavoriteTechnologyStack: 'Favorite technology stack',
  DemoExamples: 'Demo examples',
  GetInTouch: 'Get in touch',
  ComingSoon: 'Coming soon'
};
const scenarioByCommands: { [key in keyof typeof Commands]: any } = {
  Welcome: welcome,
  FavoriteTechnologyStack: favoriteTechnologyStack,
  GetInTouch: getInTouch,
  ComingSoon: comingSoon,
  DemoExamples: demoExamples,
};
const scenarioArrays = Object.keys(scenarioByCommands).map(key => scenarioByCommands[key]);
const scenario: History[] = generateIds([].concat.apply([], scenarioArrays));
const idByCommands: { [key in string]: number } = calculateIds();

function calculateIds(): { [key in string]: number } {
  let id = 1;

  return Object.keys(scenarioByCommands)
    .reduce((result, command, index): { [key in string]: number } => {
      result[command] = id;
      id += scenarioByCommands[command].length;
      return result;
    }, {});
}

export function getScenario(commandOrId: Commands | number): History {

  const id =
    typeof commandOrId === 'number'
      ? commandOrId
      : idByCommands[commandOrId];

  const result =
    scenario
      .filter(item => item.id === id)
      .reduce(a => a);

  return { ...result };
}
