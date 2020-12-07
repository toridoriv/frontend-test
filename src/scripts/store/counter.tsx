import { React, ICounterState, TDispatchCounter, ICountersListState, TActionCounter, ICounterProps, TActionCountersList, TDispatchCountersList } from './../imports';

export const CounterContext = React.createContext<ICounterState | undefined>(undefined);
export const CounterDispatchContext = React.createContext<TDispatchCounter | undefined>(undefined);

export const CountersListContext = React.createContext<ICountersListState | undefined>(undefined);
export const CountersListDispatchContext = React.createContext<TDispatchCountersList | undefined>(undefined);

export const initialCounterState: ICounterState = {
  title: 'Initial',
  count: 0,
  id: 'init'
};

export const initialCountersListState:ICountersListState = {
    counters: [ initialCounterState ]
};

export function countReducer(state: ICounterState, action: TActionCounter) {
  switch(action.type) {
    case 'increment': {
      return {
        title: state.title,
        count: state.count + 1,
        id: state.id
      };
    }
    case 'decrement': {
      return {
        title: state.title,
        count: state.count - 1,
        id: state.id
      };
    }
    default: {
      throw new Error(`Unhandled actipn type: ${ action }`);
    }
  }
};

export function countersListReducer(state: ICountersListState, action: TActionCountersList) {
  switch(action.type) {
    case 'add': {
      return [...state.counters, action.counter];
    }
    case 'delete': {
      return state.counters.filter(counter => counter.id !== action.counter.id);
    }
  }
};

export function CounterProvider({ children }: ICounterProps) {
  const [ state, dispatch ] = React.useReducer(countReducer, initialCounterState);
  return (
    <CounterContext.Provider value={ state }>
      <CounterDispatchContext.Provider value={ dispatch }>
        { children }
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};

export function CountersListProvider({ children }: ICounterProps) {
  // @ts-ignore
  const [ state, dispatch ] = React.useReducer(countersListReducer, initialCountersListState);
  return (
    <CountersListContext.Provider value={ state }>
      <CountersListDispatchContext.Provider value={ dispatch }>
        { children }
      </CountersListDispatchContext.Provider>
    </CountersListContext.Provider>
  );
};

export function UseCounterState() {
  const context = React.useContext(CounterContext);
  if (context === undefined) {
    throw new Error('something');
  }
  return context;
};

export function CounterDispatch() {
	const context = React.useContext(CounterDispatchContext);
	if (context === undefined) {
		throw new Error('useUserStatusDispatch must be used within a UserStatusProvider');
	}
	return context;
};

export function UseCountersListState() {
  const context = React.useContext(CountersListContext);
  if (context === undefined) {
    throw new Error('UseCountersListState');
  }
  return context;
};
