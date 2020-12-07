/* 📌 User Status */
export interface IUserStatus {
	logged: boolean;
};

export interface IUserStatusProps {
	children: React.ReactNode
};

export type TActionUserStatus = { type: true } | { type: false };

export type TDispatchUserStatus = (action: TActionUserStatus) => void;

/* 📌 END OF User Status */

/* ✨✨✨ */

/* 📌 Counter */
export interface ICounterState {
	title: string;
	count: number;
	id: string;
};

export interface ICountersListState {
	counters: Array<ICounterState>;
};

export interface ICounterProps {
	children: React.ReactNode
};

export type TActionCounter = { type: 'increment' } | { type: 'decrement' };

export type TActionCountersList = { type: 'add', counter: ICounterState } | { type: 'delete', counter: ICounterState };

export type TDispatchCounter = (action: TActionCounter) => void;

export type TDispatchCountersList = (action: TActionCountersList) => void;
/* 📌 END OF Counter */

/* ✨✨✨ */

/* 📌 Components Props */
export interface IBaseProps {
	children?: React.ReactNode;
	classes?: Array<string>;
};

export interface IButtonProps extends IBaseProps {
	isPrimary: boolean;
	label?: string;
	onClick?: () => void;
};

export interface ICounterCellProps extends IBaseProps {
	counter: ICounterState;
};

export interface ICounterTableProps extends ICountersListState, IBaseProps {};

export interface IHeroProps extends IBaseProps {
	subtitle?: string;
	title?: string;
};

export interface IIconProps extends IBaseProps {
	size?: string;
	type: string;
};

// export interface ISearchbarProps extends IBaseProps {
// 	type: string
// };
/* 📌 END OF Components Props */

/* ✨✨✨ */

/* 📌 API */
export interface IisLoading {
	loading: boolean;
	response?: any;
};
/* 📌 END OF API */

/* 📌 Data Types */
export interface ITag {
	title: string;
};

export interface ITagSection {
	category: string;
	tags: Array<ITag>;
};
/* 📌 END OF Data Types */
