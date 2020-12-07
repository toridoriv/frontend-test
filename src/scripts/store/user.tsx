import { React, TDispatchUserStatus, TActionUserStatus, IUserStatus, IUserStatusProps } from './../imports';

export const UserStatusContext = React.createContext<IUserStatus | undefined>(undefined);
export const UserStatusDispatchContext = React.createContext<TDispatchUserStatus | undefined>(undefined);

export function userStatusReducer(state: IUserStatus, action: TActionUserStatus) {
  switch(action.type) {
    case true: {
      return { logged: state.logged = true };
    }
    case false: {
      return { logged: state.logged = false };
    }
    default: {
      throw new Error(`Unhandled actipn type: ${ action }`);
    }
  }
};

export function UserStatusProvider({ children }: IUserStatusProps) {
  const [ state, dispatch ] = React.useReducer(userStatusReducer, { logged: false });
  return (
    <UserStatusContext.Provider value={ state }>
      <UserStatusDispatchContext.Provider value={ dispatch }>
        { children }
      </UserStatusDispatchContext.Provider>
    </UserStatusContext.Provider>
  );
};

export function UseUserStatus() {
  const context = React.useContext(UserStatusContext);
  if (context === undefined) {
    throw new Error('something');
  }
  return context;
};

export function UserStatusDispatch() {
	const context = React.useContext(UserStatusDispatchContext);
	if (context === undefined) {
		throw new Error('useUserStatusDispatch must be used within a UserStatusProvider');
	}
	return context;
};
