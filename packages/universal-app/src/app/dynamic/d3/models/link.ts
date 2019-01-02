import { SimulationLinkDatum } from 'd3';

import { Node } from './node';

export class Link implements SimulationLinkDatum<Node> {
  index?: number;

  source: Node | string | number;
  target: Node | string | number;

  constructor(source, target) {
    this.source = source;
    this.target = target;
  }
}
