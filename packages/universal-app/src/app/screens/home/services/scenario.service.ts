import { Injectable } from '@angular/core';

import { History } from '../types/History';
import { scenario, Scenario, getScenario } from './scenario';


@Injectable()
export class ScenarioService {
  private history: History[] = [];

  getHistory(): History[] {
    return [...this.history];
  }

  constructor() { }

  init(): void {
    if (this.history.length === 0) {
      this.newScenarioHistory(0);
    }
  }

  private newScenarioHistory(id: number) {
    const { timeout, ...convertedHistory } = getScenario('welcome');

    setTimeout(() => this.newHistory(convertedHistory), timeout);
  }

  private newHistory(history: History): void {
    if (this.history.length === 0) {
      this.history.push(history);
    }
  }
}
