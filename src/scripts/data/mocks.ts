import { faker, ICounterState } from './../imports';

export function randomCounters(quantity: number, counters: Array<ICounterState>): Array<ICounterState> {
  let tempArr = [];
  for (let i = 0; i < quantity; i++) {
    let counter = {
      title: faker.commerce.product(),
      count: 0,
      id: faker.random.uuid()
    };
    tempArr.push(counter);
  }
  return counters.concat(tempArr);
};

export function compareCounters(counterOne: ICounterState, counterTwo: ICounterState): boolean {
  return counterOne.title === counterTwo.title;
};
