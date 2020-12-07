export { default as React, useEffect, useState } from 'react';
export { default as ReactDOM } from 'react-dom';
export { v4 as uuidv4 } from 'uuid';
export { default as _ } from 'lodash';

export { fetchCounters, postCounter } from './api';
export { listOfExamples } from './data/examples';
export { createClassName, addNewCounter } from './helpers';
export { userStatusReducer, UserStatusProvider, UseUserStatus, UserStatusDispatch } from './store/user';
export { countReducer, CounterContext, CounterDispatchContext, countersListReducer, CounterProvider, CountersListProvider, UseCountersListState } from './store/counter';

export type { IBaseProps, IButtonProps, TDispatchUserStatus, IHeroProps, TActionUserStatus, IUserStatus, IUserStatusProps, IIconProps, ICounterState, ICounterProps, ICountersListState, TActionCounter, TDispatchCounter, TActionCountersList, TDispatchCountersList, ICounterTableProps, ICounterCellProps, IisLoading, ITag, ITagSection } from './interfaces';

export { default as logo } from './../assets/img/logo.svg';

export { default as App } from '../App';
export { default as AddCounter } from '../components/molecules/AddCounter'
export { default as CreateCounter } from '../components/pages/CreateCounter';
export { default as Button } from '../components/atoms/Button';
export { default as CreateCounterHeader } from '../components/molecules/CreateCounterHeader';
export { default as CreateCounterInput } from '../components/molecules/CreateCounterInput';
export { default as Column } from '../components/atoms/Column';
export { default as Columns } from '../components/atoms/Columns';
export { default as CounterCell } from '../components/atoms/CounterCell';
export { default as CounterTable } from '../components/molecules/CounterTable';
export { default as Examples } from '../components/pages/Examples';
export { default as ExamplesHeader } from '../components/organisms/ExamplesHeader';
export { default as ExamplesTags } from '../components/organisms/ExamplesTags';
export { default as Hero } from '../components/molecules/Hero';
export { default as Icon } from '../components/atoms/Icon';
export { default as Loader } from '../components/molecules/Loader';
export { default as Logo } from '../components/atoms/Logo';
export { default as Main } from '../components/pages/Main';
export { default as Navbar } from '../components/molecules/Navbar';
export { default as Searchbar } from '../components/molecules/Searchbar';
export { default as Subtitle } from '../components/atoms/Subtitle';
export { default as Tag } from '../components/atoms/Tag';
export { default as Title } from '../components/atoms/Title';
export { default as Welcome } from '../components/pages/Welcome';
