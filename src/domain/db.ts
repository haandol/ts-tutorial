import { Pirate } from './models';

const pirates: Pirate[] = [
  new Pirate('루피', 5, true),
  new Pirate('상디', 1.7, false),
  new Pirate('조로', 3.2, false),
  new Pirate('우솝', 2, false),
  new Pirate('로빈', 1.3, true),
  new Pirate('브룩', .83, true),
  new Pirate('나미', .66, false)
]

class DB {
  constructor() {}
  
  public query = (name?: string): Pirate[] => {
    if (!name) {
      return pirates;
    }

    return pirates.filter(
      (pirate, i): boolean => { return pirate.name === name; }, pirates
    );
  }
}

export const db = new DB();
