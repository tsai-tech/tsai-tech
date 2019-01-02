import { Injectable } from '@angular/core';
import * as d3 from 'd3';

import { Link } from '../models/link';
import { Node } from '../models/node';
import { ForceDirectedGraph } from '../models/force-directed-graph';

@Injectable()
export class D3Service {

  constructor() { }

  applyZoomableBehaviour() {}

  applyDraggableBehaviour() {}

  getForceDirectedGraph(
    nodes: Node[],
    links: Link[],
    options: { width, height }
  ) {
    const graph = new ForceDirectedGraph(nodes, links, options);
    return graph;
  }
}
