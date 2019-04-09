import { Action } from '@ngrx/store';

export enum CounterActionTypes {
	Increment = 'Increment',
	Decrement = 'Decrement',
	Reset = 'Reset',
	Change = 'Change'
}

export class Increment implements Action {
	readonly type = CounterActionTypes.Increment;
}

export class Decrement implements Action {
	readonly type = CounterActionTypes.Decrement;
}

export class Reset implements Action {
	readonly type = CounterActionTypes.Reset;
}

export class Change implements Action {
	readonly type = CounterActionTypes.Change;
}

export type CounterActions = Increment | Decrement | Reset | Change;
