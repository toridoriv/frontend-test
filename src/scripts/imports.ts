/* 📌 From Libraries */
export { default as React, createElement, useEffect, useMemo, useRef } from 'react';
export type { SetStateAction, Reducer } from 'react';
export { default as ReactDOM } from 'react-dom';
export { default as faker } from 'faker';
export { StateInspector, useState, useReducer } from 'reinspect';
export { v4 as uuidv4 } from 'uuid';
export { default as _ } from 'lodash';

/* 📌 From App Scripts - Functions */
export { fetchCounters, postCounter } from './api';
export { listOfExamples } from './data/examples';
export { randomCounters } from './data/mocks';
export { createClassName, addNewCounter } from './helpers';
export { UserState, initialUserState, ToggleUserState, userStatusReducer, UserStatusProvider, UseUserStatus, UserStatusDispatch } from './store/user';
export { countReducer, CounterContext, CounterDispatchContext, countersListReducer, CounterProvider, CountersListProvider, UseCountersListState } from './store/counter';

/* 📌 From App Scripts - Interfaces and Types */
export type { IStatePayload, IBaseProps, IButtonProps, TDispatchUserStatus, IHeroProps, TActionUserStatus, IUserStatus, IUserStatusProps, IIconProps, ICounterState, ICounterProps, ICountersListState, TActionCounter, TDispatchCounter, TActionCountersList, TDispatchCountersList, ICounterCellProps, IisLoading, ITag, ITagSection, ICircleProps } from './interfaces';

/* 📌 From App Assets */
export { default as logo } from './../assets/img/logo.svg';

/* 📌 From App Components - Atoms */
export { default as Button } from '../components/atoms/Button';
export { default as Circle } from '../components/atoms/Circle';
export { default as Column } from '../components/atoms/Column';
export { default as Columns } from '../components/atoms/Columns';
export { default as Icon } from '../components/atoms/Icon';

/* 📌 From App Components - Molecules */
export { default as AddCounter } from '../components/molecules/AddCounter';
export { default as CreateCounterHeader } from '../components/molecules/CreateCounterHeader';
export { default as CreateCounterInput } from '../components/molecules/CreateCounterInput';
export { default as CounterCell } from '../components/molecules/CounterCell';
export { default as CounterTable } from '../components/molecules/CounterTable';
export { default as Hero } from '../components/molecules/Hero';

/* 📌 From App Components - Organisms */
export { default as ExamplesHeader } from '../components/organisms/ExamplesHeader';
export { default as ExamplesTags } from '../components/organisms/ExamplesTags';

/* 📌 From App Components - Pages */
export { default as App } from '../App';
export { default as CreateCounter } from '../components/pages/CreateCounter';
export { default as Examples } from '../components/pages/Examples';



export { default as Loader } from '../components/molecules/Loader';
export { default as Logo } from '../components/atoms/Logo';
export { default as Main } from '../components/pages/Main';
export { default as Navbar } from '../components/molecules/Navbar';
export { default as Searchbar } from '../components/molecules/Searchbar';
export { default as Subtitle } from '../components/atoms/Subtitle';
export { default as Tag } from '../components/atoms/Tag';
export { default as Title } from '../components/atoms/Title';
export { default as Welcome } from '../components/pages/Welcome';
