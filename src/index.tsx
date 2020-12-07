import { React, ReactDOM, App } from './scripts/imports';

import './assets/styles/main.scss';

import reportWebVitals from './reportWebVitals';

// type ActionCounter = { type: 'increment' } | { type: 'decrement' };
// type DispatchCounter = (action: ActionCounter) => void;
// type StateCounter = { count: number };
// type CountProviderProps = { children: React.ReactNode };
//
// type ActionUserStatus = { type: 'loggin' } | { type: 'logout' };
// export type DispatchUserStatus = (action: ActionUserStatus) => void;
// type StateUserStatus = { user: boolean };
// type UserStatusProps = { children: React.ReactNode };
//
// const CountStateContext = React.createContext<StateCounter | undefined>(undefined);
// const CountDispatchContext = React.createContext<DispatchCounter | undefined>(undefined);
//
// const UserStatusContext = React.createContext<StateUserStatus | undefined>(undefined);
// const UserStatusDispatchContext = React.createContext<DispatchUserStatus | undefined>(undefined);
//
// function countReducer(state: StateCounter, action: ActionCounter) {
// 	switch(action.type) {
// 		case 'increment': {
// 			return { count: state.count + 1 };
// 		}
// 		case 'decrement': {
// 			return { count: state.count - 1 };
// 		}
// 		default: {
// 			throw new Error(`Unhandled action type: ${ action }`);
// 		}
// 	}
// };
//
// function userStatusReducer(state: StateUserStatus, action: ActionUserStatus) {
// 	switch(action.type) {
// 		case 'loggin': {
// 			return { user: state.user = true };
// 		}
// 		case 'logout': {
// 			return { user: state.user = false };
// 		}
// 		default: {
// 			throw new Error(`Unhandled action type: ${ action }`);
// 		}
// 	}
// };
//
// function CountProvider({ children }: CountProviderProps) {
// 	const [ state, dispatch ] = React.useReducer(countReducer, { count: 0});
// 	return (
// 		<CountStateContext.Provider value={ state }>
// 			<CountDispatchContext.Provider value={ dispatch }>
// 				{ children }
// 			</CountDispatchContext.Provider>
// 		</CountStateContext.Provider>
// 	);
// };
//
// function UserStatusProvider({ children }: UserStatusProps) {
// 	const [ state, dispatch ] = React.useReducer(userStatusReducer, { user: false });
// 	return (
// 		<UserStatusContext.Provider value={ state }>
// 			<UserStatusDispatchContext.Provider value={ dispatch }>
// 				{ children }
// 			</UserStatusDispatchContext.Provider>
// 		</UserStatusContext.Provider>
// 	);
// };
//
// function useCountState() {
// 	const context = React.useContext(CountStateContext);
// 	if (context === undefined) {
// 		throw new Error('useCountState must be used within a CountProvider');
// 	};
// 	return context;
// };
//
// function useUserStatusState() {
// 	const context = React.useContext(UserStatusContext);
// 	if (context === undefined) {
// 		throw new Error('useUserStatusState must be used within a UserStatusProvider');
// 	}
// 	return context;
// };
//
// function useCountDispatch() {
// 	const context = React.useContext(CountDispatchContext);
// 	if (context === undefined) {
// 		throw new Error('useCountDispatch must be used within a CountProvider')
// 	};
// 	return context;
// };
//
// function useUserStatusDispatch() {
// 	const context = React.useContext(UserStatusDispatchContext);
// 	if (context === undefined) {
// 		throw new Error('useUserStatusDispatch must be used within a UserStatusProvider');
// 	}
// 	return context;
// };
//
// function CountDisplay() {
// 	const { count } = useCountState();
// 	return <div>{`The current count is ${ count }`}</div>;
// };
//
// function UserStatusDisplay() {
// 	const { user } = useUserStatusState();
// 	return <div>{`The current status is ${ user }`}</div>;
// };
//
// function CounterIncrement() {
// 	const dispatch = useCountDispatch();
// 	return (
// 		<button onClick={() => dispatch({type: 'increment'})}>
// 			Increment count
// 		</button>
// 	);
// };
//
// function CounterDecrement() {
// 	const dispatch = useCountDispatch();
// 	return (
// 		<button onClick={() => dispatch({type: 'decrement'})}>
// 			Decrement count
// 		</button>
// 	);
// };
//
// // async function CounterQuantity() {
// //
// // };
//
// function Login() {
// 	const dispatch = useUserStatusDispatch();
// 	return (
// 		<button onClick={() => dispatch({type: 'loggin'})}>
// 			Login
// 		</button>
// 	);
// };
//
// function Logout() {
// 	const dispatch = useUserStatusDispatch();
// 	return (
// 		<button onClick={() => dispatch({type: 'logout'})}>
// 			Logout
// 		</button>
// 	);
// };

ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
